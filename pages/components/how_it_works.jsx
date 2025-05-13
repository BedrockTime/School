import { useState } from "react"

const HowItWorks = () => {
    const [img, setImg] = useState("https://thumb.cloud.mail.ru/weblink/thumb/xw1/r9Bi/dD5vJCDAC")

    return(
        <div>
            <div className="text_works_div">
                <h2 className="content_text_h2">КАК  ЭТО  РАБОТАЕТ</h2>
                <h1 className="text_works_h1">Создайте онлайн-квест — быстро и легко</h1>
            </div>
            <div className="works_parent">
                <div className="works_text_div">
                    <div className="works_text_part" onMouseOver={() => setImg("https://thumb.cloud.mail.ru/weblink/thumb/xw1/r9Bi/dD5vJCDAC")}>
                        <div className="micro_line"/>
                        <div className="works_numtext">
                            <div className="divnum">
                                <h1 className="num">1</h1>
                            </div>
                            <h1 className="works_h1">Воспользуйтесь готовым списком уникальных задачек</h1>
                        </div>
                        <p className="works_p">Используйте готовые задания для создания ваших увлекательных квестов.</p>
                    </div>
                    <div className="works_text_part" onMouseOver={() => setImg("https://thumb.cloud.mail.ru/weblink/thumb/xw1/WbJY/wLurHg4yK")}>
                        <div className="micro_line"/>
                        <div className="works_numtext">
                            <div className="divnum">
                                <h1 className="num">2</h1>
                            </div>
                            <h1 className="works_h1">Получите результаты учеников в личном кабинете</h1>
                        </div>
                        <p className="works_p">Результаты учеников автоматически запишутся в ваш личный кабинет в карточку с квестом.</p>
                    </div>
                </div>
                <div className="placehold">
                    <img src={img} className="works_img"/>
                </div>
            </div>
        </div>
    )
  }
  
  export default HowItWorks