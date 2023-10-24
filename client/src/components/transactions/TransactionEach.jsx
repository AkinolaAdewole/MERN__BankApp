import React from 'react'

const TransactionEach = ({date, description, amount,type, accountNo, accountName}) => {
  return (
    <>
        <div className='row my-3 px-3 align Items Centeer'>
            <div className="col-8">
            <small>{date}</small>
            {accountNo?<p className='mb-1'>{accountNo} {accountName}</p>:""}
            <p className='mb-1'>{description}</p>
            </div>
            <div className="col-4">
                {type?<p className='text-success'>{amount}</p>:<p className='text-danger'>{amount}</p>}
            </div>
        </div>
        <hr />
    </>
  )
}

export default TransactionEach