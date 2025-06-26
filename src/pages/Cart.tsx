
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => 
      `• ${item.name} x${item.quantity} - ${item.price} each`
    ).join('\n');

    const total = getCartTotal().toFixed(2);
    
    const message = `🛒 *New Order from code2robot*

👤 *Customer Details:*
Name: ${customerInfo.name || 'Not provided'}
Phone: ${customerInfo.phone || 'Not provided'}
Email: ${customerInfo.email || 'Not provided'}
Address: ${customerInfo.address || 'Not provided'}

📦 *Order Details:*
${orderDetails}

💰 *Total Amount: $${total}*

Please confirm this order. Thank you!`;

    const phoneNumber = "+923008427008";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <Navbar />
        <div className="pt-20 pb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
              <p className="text-gray-400 mb-8">Add some amazing robotics products to get started!</p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />
      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Shopping <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Cart</span>
            </h1>
            <p className="text-gray-400">Review your items and proceed to checkout</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <Card key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-in slide-in-from-left" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-orange-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-orange-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                        <div className="space-y-1 mb-4">
                          {item.features.slice(0, 2).map((feature, idx) => (
                            <p key={idx} className="text-sm text-gray-400">• {feature}</p>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="h-8 w-8 bg-white/5 border-white/20 text-white hover:bg-white/10"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="h-8 w-8 bg-white/5 border-white/20 text-white hover:bg-white/10"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                              {item.price}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="h-8 w-8 bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Items ({getCartCount()})</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <hr className="border-white/10" />
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, name: e.target.value}))}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                      <Input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, phone: e.target.value}))}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, email: e.target.value}))}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="text-gray-300">Delivery Address</Label>
                      <Input
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({...prev, address: e.target.value}))}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="Your delivery address"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Checkout via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full border-red-500/20 text-red-400 hover:bg-red-500/10"
                  >
                    Clear Cart
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
