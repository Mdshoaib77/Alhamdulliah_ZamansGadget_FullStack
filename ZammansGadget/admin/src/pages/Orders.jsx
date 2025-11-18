import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700'
          >
            <img className='w-12' src={assets.parcel_icon} alt="Parcel Icon" />

            <div>
              <div>
                {order.items.map((item, i) => {
                  const variantName = item.variant || 'N/A';
                  const colorName = item.color || 'N/A';

                  const colorDot = colorName !== 'N/A' ? (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 12,
                        height: 12,
                        backgroundColor: colorName.toLowerCase(),
                        borderRadius: '50%',
                        marginLeft: 6,
                        verticalAlign: 'middle',
                        border: '1px solid #ccc',
                      }}
                      title={colorName}
                    />
                  ) : null;

                  return (
                    <p className='py-0.5' key={i}>
                      {item.name || item.title || 'Product'} x {item.quantity}{' '}
                      <span className="italic">{variantName}</span>{' '}
                      {colorName !== 'N/A' && (
                        <>
                          - {colorName} {colorDot}
                        </>
                      )}
                      {i !== order.items.length - 1 && ','}
                    </p>
                  )
                })}
              </div>

              {/* ✅ Order ID added */}
              <p className='mt-1 text-xs text-gray-500'>Order ID: {order._id}</p>

              <p className='mt-3 mb-2 font-medium'>{order.address.fullName}</p>
              <div>
                <p>{order.address.address}</p>
                <p>{order.address.phone}</p>
              </div>
            </div>

            <div>
              <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
              <p className='mt-3'>Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className='p-2 font-semibold'
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
