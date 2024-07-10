import './Footer.css';

function Footer() {
    return (
        <div className='container'>
            <div className='footer'>
                <p className='footerText'>Connnex IT</p>
                <div className='footerButtonGroup'>
                    <button className='footerButton1'><i class="bi bi-x-lg footereicon1"></i></button>
                    <button className='footerButton2'><i class="bi bi-pip footereicon1"></i></button>
                    <button className='footerButton3'><i class="bi bi-pip footereicon1"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Footer