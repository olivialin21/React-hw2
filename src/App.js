import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <header className="header">
            <nav className="nav_header navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="#"><img src="img/btn_logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10006&type_id=10006">認識泰山</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.taishan.ntpc.gov.tw/feedback/?type_id=20&parent_id=20">意見信箱</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10248&type_id=10248">防災專區</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10007&type_id=10007">公所介紹</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10243&type_id=10243">Q&A問答</a></li>
                    </ul>
                </div> 
            </nav>
        </header>
        <article className="article">
            <picture>
                <source srcset="img/L_MRT.png" media="(min-width:992px)"/>
                <source srcset="img/M_MRT.png" media="(min-width:768px)"/>
                <img className="banner" src="img/S_MRT.png" alt="MRT"/>
            </picture>
            <div className="icon">
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10008&type_id=10008">
                        <div>
                            <img className="img_icon" src="img/btn_location.png" alt="btn_location"/>
                        </div>
                    </a>
                    <p className="icon_word">鄰里資訊</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10119">
                        <div>
                            <img className="img_icon" src="img/btn_tour.png" alt="btn_tour"/>
                        </div>
                    </a>
                    <p className="icon_word">觀光導覽</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10014&type_id=10014">
                        <div>
                            <img className="img_icon" src="img/btn_bus.png" alt="btn_bus"/>
                        </div>
                    </a>
                    <p className="icon_word">新北市新巴士</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.tsprm.com.tw/">
                        <div>
                            <img className="img_icon" src="img/btn_forlife.png" alt="btn_forlife"/>
                        </div>
                    </a>
                    <p className="icon_word">樂活泰山</p>
                </div>
                <div className="icon_size col-lg-5ths  col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10316">
                        <div>
                            <img className="img_icon" src="img/btn_rent.png" alt="btn_rent"/>                            
                        </div>
                    </a>
                    <p className="icon_word">場地租借</p>
                </div>
            
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10009&type_id=10009">
                        <div>
                            <img className="img_icon" src="img/btn_resident.png" alt="btn_resident"/>
                        </div>
                    </a>
                    <p className="icon_word">便民服務</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.ntpc.gov.tw/ch/index.jsp">
                        <div>
                            <img className="img_icon" src="img/btn_calendar.png" alt="btn_calendar"/>
                        </div>
                    </a>
                    <p className="icon_word">活動行事曆</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10374">
                        <div>
                            <img className="img_icon" src="img/btn_governor.png" alt="btn_governor"/>
                        </div>
                    </a>
                    <p className="icon_word">廉政專區</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10152">
                        <div>
                            <img className="img_icon" src="img/btn_mediate.png" alt="btn_mediate"/>
                        </div>
                    </a>
                    <p className="icon_word">調解業務</p>
                </div>
                <div className="icon_size col-lg-5ths col-md-5ths col-sm-4 col-center">
                    <a href="https://www.taishan.ntpc.gov.tw/content/?parent_id=10181">
                        <div>
                            <img className="img_icon" src="img/btn_account.png" alt="btn_account"/>
                        </div>
                    </a>
                    <p className="icon_word">會計業務專區</p>
                </div>
            </div>            
        </article>       
        <footer className="footer">
            <div className="footer_pos">
                <a className="link" href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw">
                    <img src="img/ig.png" alt="ig"/>
                </a>
                <a className="link" href="https://www.facebook.com/groups/352452254857341">
                    <img src="img/fb.png" alt="fb"/>
                </a>
                <a className="link" href="https://www.youtube.com/channel/UCmej5oymLBhl8X3TGrd7JKg?view_as=subscriber">
                    <img src="img/yt.png" alt="yt"/>
                </a>
            </div>
        </footer>
    </div>
  );
}

export default App;
