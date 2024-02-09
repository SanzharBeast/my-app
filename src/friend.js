import React from 'react'

export default function Friend() {
    return (
        <div>
            <div className='search'>
                <input type="text" placeholder='Введите имя вашего друга' className='inp' />
                <button className='bt'>Искать</button>
            </div>
            <div className='friendsDiv'>
                <div className='f1'>
                    <div>
                        <img src="download_570334.png" height='50' width='50' />
                    </div>
                    <div>
                        <p>Санжар Оспан</p>
                    </div>
                </div>
                <div className='fr2'>
                    <div>
                    <img src='download_570334.png' height='50' width='50' />
                    </div>
                    <div>
                        <p>Санжар Оспан</p>
                    </div>
                </div>
                <div className='fr3'>
                    <div>
                    <img src='download_570334.png' height='50' width='50' />
                    </div>
                    <div>
                    <p>Санжар Оспан</p>
                    </div>
                </div>
                <div className='fr4'>
                    <div>
                    <img src='download_570334.png' height='50' width='50' />
                    </div>
                    <div>
                    <p>Санжар Оспан</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
