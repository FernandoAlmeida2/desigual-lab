"use client"
import { useState } from "react";
import { Styles } from "../ContentTop.styles";
import PressContent from "./PressContent";
import { NewsNames } from "@/app/lib/definitions";

export default function Printed() {
    const [showNews, setShowNews] = useState({news1: false, news2: false, news3: false,  news4: false})

    function toggleNews(news: NewsNames) {
      setShowNews({...showNews, [news]: !showNews[news]})
    }


  return (
    <Styles.ContentTop>
      <h1>Imprensa</h1>
      <br />
      {showNews.news1 && <PressContent newsName="news1" toggleNews={toggleNews} />}
      {showNews.news2 && <PressContent newsName="news2" toggleNews={toggleNews} />}
      {showNews.news3 && <PressContent newsName="news3" toggleNews={toggleNews} />}
      {showNews.news4 && <PressContent newsName="news4" toggleNews={toggleNews} />}

      <Styles.PressCard>
        <Styles.PressContent>
          <div>Impressa</div>
          <br />
          <div>Jornal O Povo (Fortaleza, Brasil) <br /> 3 de Setembro de 2023</div>
          <div>A efetividade de políticas públicas contra a desigualdade</div>
          <button onClick={() => toggleNews("news1")}>Leia</button>
        </Styles.PressContent>

        <Styles.PressImg>
          <img src="/images/press/news1.jpeg" alt="news-1"  />
        </Styles.PressImg>
      </Styles.PressCard>

      <Styles.PressCard>
        <Styles.PressContent>
          <div>Impressa</div>
          <br />
          <div>Jornal O Povo (Fortaleza, Brasil) <br /> 3 de Setembro de 2023</div>
          <br />
          <div>A efetividade de políticas públicas contra a desigualdade</div>
          <button onClick={() => toggleNews("news2")}>Leia</button>
        </Styles.PressContent>

        <Styles.PressImg>
          <img src="/images/press/news2.jpeg" alt="news-2" />
        </Styles.PressImg>
      </Styles.PressCard>

      <Styles.PressCard>
        <Styles.PressContent>
          <div>Impressa</div>
          <br />
          <div>Jornal O Povo (Fortaleza, Brasil) <br /> 3 de Setembro de 2023</div>
          <br />
          <div>A efetividade de políticas públicas contra a desigualdade</div>
          <button onClick={() => toggleNews("news3")}>Leia</button>
        </Styles.PressContent>

        <Styles.PressImg>
          <img src="/images/press/news3.jpeg" alt="news-3" />
        </Styles.PressImg>
      </Styles.PressCard>

      <Styles.PressCard>
        <Styles.PressContent>
          <div>Impressa</div>
          <br />
          <div>Jornal O Povo (Fortaleza, Brasil) <br /> 3 de Setembro de 2023</div>
          <br />
          <div>A efetividade de políticas públicas contra a desigualdade</div>
          <button onClick={() => toggleNews("news4")}>Leia</button>
        </Styles.PressContent>

        <Styles.PressImg>
          <img src="/images/press/news4.jpeg" alt="news-4" />
        </Styles.PressImg>
      </Styles.PressCard>

    </Styles.ContentTop>
  );
}
