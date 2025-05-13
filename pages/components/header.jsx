import Link from 'next/link'

const Header = () => {
    return(
      <div>
        <div className="header">
          <div/>
          <Link href="./components/personal" className="link">Личный кабинет</Link>
        </div>
        <div className="div_shapka">
          <div className="shapka"/>
        </div>
        <div className="header_text">
          <h2 className="header_text_h2">Веб-квесты для обучения</h2>
          <p className="header_text_p">Создайте свой собственный квест из готовых задач</p>
          <p className="header_text_p">Ученикам предстоит “найти предметы”, решив все задачи</p>
          <div className="div_button">
            <Link href="/components/quests" className="header_text_button">КВЕСТЫ</Link>
          </div>
        </div>
        <div className="line" />
      </div>
    )
  }
  
  export default Header