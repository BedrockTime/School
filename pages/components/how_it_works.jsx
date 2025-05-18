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
                    <div className="works_text_part">
                        <div className="works_numtext">
                            <h1 className="works_h1">Воспользуйтесь готовым списком уникальных задачек</h1>
                        </div>
                    </div>
                    <div className="works_text_part">
                        <div className="works_numtext">
                            <h1 className="works_h1">Используйте готовые задания для создания ваших увлекательных квестов.</h1>
                        </div>
                    </div>
                </div>
                <div className="placehold">
                    <img src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/r9Bi/dD5vJCDAC" className="works_img"/>
                </div>
            </div>
        </div>
    )
  }
  
  export default HowItWorks