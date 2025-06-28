import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CreditCard, User, MapPin, Phone, Mail } from 'lucide-react';

// Extended order data with more details
const orders = [
  {
    id: 'ORD-001',
    customer: {
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, New York, NY 10001'
    },
    status: 'completed',
    total: '$149.99',
    subtotal: '$139.99',
    tax: '$10.00',
    shipping: '$0.00',
    date: '2024-01-15',
    items: [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        price: '$999',
        quantity: 1,
        image: 'https://imgs.search.brave.com/B9nw2m5R21HilWZ2C0kDKcIU19huHNs7zjcvfGPGmxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aXJl/bGVzc3pvbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA5L2lQaG9uZTE1/UHJvLTc3NngxMDI0/LnBuZw'
      }
    ],
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA'
    },
    paymentMethod: 'Credit Card ending in 1234',
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-18'
  },
  {
    id: 'ORD-002',
    customer: {
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1 (555) 234-5678',
      address: '456 Oak Ave, Los Angeles, CA 90210'
    },
    status: 'pending',
    total: '$299.50',
    subtotal: '$279.50',
    tax: '$20.00',
    shipping: '$0.00',
    date: '2024-01-14',
    items: [
      {
        id: 2,
        name: 'Nike Air Max',
        price: '$129',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=64&h=64&fit=crop'
      },
      {
        id: 5,
        name: 'Fitness Tracker',
        price: '$79',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=64&h=64&fit=crop'
      }
    ],
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210',
      country: 'USA'
    },
    paymentMethod: 'PayPal',
    trackingNumber: null,
    estimatedDelivery: null
  },
  {
    id: 'ORD-003',
    customer: {
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      phone: '+1 (555) 345-6789',
      address: '789 Pine Rd, Chicago, IL 60601'
    },
    status: 'processing',
    total: '$89.99',
    subtotal: '$79.99',
    tax: '$10.00',
    shipping: '$0.00',
    date: '2024-01-14',
    items: [
      {
        id: 3,
        name: 'Coffee Maker',
        price: '$199',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=64&h=64&fit=crop'
      }
    ],
    shippingAddress: {
      street: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      country: 'USA'
    },
    paymentMethod: 'Credit Card ending in 5678',
    trackingNumber: 'TRK987654321',
    estimatedDelivery: '2024-01-20'
  },
  {
    id: 'ORD-004',
    customer: {
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 456-7890',
      address: '321 Elm St, Miami, FL 33101'
    },
    status: 'completed',
    total: '$459.99',
    subtotal: '$429.99',
    tax: '$30.00',
    shipping: '$0.00',
    date: '2024-01-13',
    items: [
      {
        id: 4,
        name: 'Gaming Chair',
        price: '$299',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=64&h=64&fit=crop'
      },
      {
        id: 5,
        name: 'Fitness Tracker',
        price: '$79',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=64&h=64&fit=crop'
      }
    ],
    shippingAddress: {
      street: '321 Elm St',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      country: 'USA'
    },
    paymentMethod: 'Credit Card ending in 9012',
    trackingNumber: 'TRK456789123',
    estimatedDelivery: '2024-01-16'
  },
  {
    id: 'ORD-005',
    customer: {
      name: 'Eva Brown',
      email: 'eva.brown@email.com',
      phone: '+1 (555) 567-8901',
      address: '654 Maple Dr, Seattle, WA 98101'
    },
    status: 'cancelled',
    total: '$199.99',
    subtotal: '$179.99',
    tax: '$20.00',
    shipping: '$0.00',
    date: '2024-01-13',
    items: [
      {
        id: 3,
        name: 'Coffee Maker',
        price: '$199',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=64&h=64&fit=crop'
      }
    ],
    shippingAddress: {
      street: '654 Maple Dr',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      country: 'USA'
    },
    paymentMethod: 'Credit Card ending in 3456',
    trackingNumber: null,
    estimatedDelivery: null
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'processing':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const order = orders.find(o => o.id === id);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Order Not Found</h2>
        <Link to="/orders" className="text-[color:var(--theme-600)] hover:underline">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/orders" 
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order {order.id}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Placed on {order.date}</p>
          </div>
        </div>
        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(order.status)}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Items */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">{item.price}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Total: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipping Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[color:var(--theme-600)] mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Shipping Address</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {order.shippingAddress.street}<br />
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}<br />
                    {order.shippingAddress.country}
                  </p>
                </div>
              </div>
              {order.trackingNumber && (
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-[color:var(--theme-600)]" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Tracking Number</p>
                    <p className="text-gray-700 dark:text-gray-300">{order.trackingNumber}</p>
                  </div>
                </div>
              )}
              {order.estimatedDelivery && (
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-[color:var(--theme-600)]" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Estimated Delivery</p>
                    <p className="text-gray-700 dark:text-gray-300">{order.estimatedDelivery}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-[color:var(--theme-600)]" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{order.customer.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[color:var(--theme-600)]" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{order.customer.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[color:var(--theme-600)]" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{order.customer.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-[color:var(--theme-600)]" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Payment Method</p>
                  <p className="text-gray-700 dark:text-gray-300">{order.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
                <span className="text-gray-900 dark:text-white">{order.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Tax</span>
                <span className="text-gray-900 dark:text-white">{order.tax}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">Shipping</span>
                <span className="text-gray-900 dark:text-white">{order.shipping}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                  <span className="font-semibold text-[color:var(--theme-600)]">{order.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail; 