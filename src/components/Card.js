import React, { useState, useEffect } from 'react'

function Card ({datacampaign: data}) {
  const target = data.donation_percentage

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img src={data.image}
          style={{objectFit: 'cover'}}
          height="210"
          className="card-img-top"
          alt={data.short_url} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <div className="bar-target">
            <div className={`bar-donation ${(target < 1) ? 'ongoing': 'complete'}`}
              style={{width: target < 1 ? `${target*100}%` : '100%'}}>
            </div>
          </div>
          <div className="description">
            <div>
              <p>Terkumpul</p>
              <p>Rp {data.donation_received.toLocaleString('id-ID')}</p>
            </div>
            <div>
              <p>Sisa hari</p>
              <p>{data.days_remaining}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
