import React, { useEffect } from "react"
import {
  MainWrapper,
  StickyNav,
  NavWrapper,
  StyledSection,
  SectionSpacer,
} from "../contextComponents/ContextStyles"
import Text from "../Text/Text"

const ContextContentSection = ({ width, mobileBreakpoint }) => {
  const mainNavLinks = document.querySelectorAll("main nav ul li a")
  const tabletBreakpoint = 970

  useEffect(() => {
    typeof window !== `undefined` &&
      window.addEventListener("scroll", event => {
        let fromTop = window.scrollY

        mainNavLinks.forEach(link => {
          let section = document.querySelector(link.hash)
          if (
            section.offsetTop <= fromTop + 150 &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active")
          } else {
            link.classList.remove("active")
          }
        })
      })
  }, [mainNavLinks])

  const handleClick = e => {
    e.preventDefault()
    let section = document.querySelector(e.target.hash)
    console.log("AAA")
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <MainWrapper>
      {width >= tabletBreakpoint && (
        <NavWrapper>
          <nav>
            <ul>
              <li>
                <a onClick={e => handleClick(e)} href="#opowiesci">
                  Opowieści kamienicy
                </a>
              </li>
              <li>
                <a onClick={e => handleClick(e)} href="#odczuwanie">
                  odczuwanie architektury
                </a>
              </li>
              <li>
                <a onClick={e => handleClick(e)} href="#dotyk">
                  o dotyku
                </a>
              </li>
            </ul>
          </nav>
        </NavWrapper>
      )}
      <div>
        <section id="opowiesci">
          <Text
            as="h2"
            margin="0 0 52px"
            mobileMargin="0 0 20px"
            fontSize="52px"
            lineHeight="60px"
            fontWeight="400"
          >
            Opowieści kamienicy
          </Text>
          <Text>
            Słowo <span> izolacja</span> przewijało się ostatnimi czasy dosyć
            często w rozmowach, tych zasłyszanych i tych, przeprowadzanych - w
            tramwajach, w kolejkach, poczekalniach, parkach, w domach, podczas
            spotkań towarzyskich, podczas konferencji dotyczących pracy, podczas
            śniadań i kolacji.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            Pandemia, której się nie spodziewaliśmy, sprawiła, że wiele i wielu
            z nas zostało zmuszonych do <span> zamknięcia się</span> na pewien
            czas w domu, czy też przynajmniej - do spędzenia w nim większej
            ilości czasu, niż dotychczas.{" "}
          </Text>
          <section id="dom">
            <Text
              as="h3"
              margin="50px 0 26px"
              mobileMargin="20px 0"
              fontSize="38px"
              lineHeight="46px"
              fontWeight="400"
            >
              Dom
            </Text>

            <Text>
              Dom jest tym czymś, co zwykle przewija się w pierwszych rysunkach
              dzieci. <span> W dom</span> jest jedną z pierwszych wspólnych
              zabaw. <span> Domem </span>
              nazywamy konkretną przestrzeń, budynek, instytucję społeczną. Ale
              dom to też miejsce, z którego się pochodzi, do którego się wraca,
              za którym się tęskni, albo którego się nienawidzi, który można
              stracić wraz z odejściem jakiejś osoby.
            </Text>

            <Text margin="32px 0 0" mobileMargin="20px 0 0">
              Niektórzy bardzo chcą mieć <span> swój dom</span> . Inni ciągle
              zmieniają miejsca zamieszkania. Dla niektórych dom to pierwsze
              miejsce, w jakim się żyło, dla innych - plecak z
              najpotrzebniejszymi rzeczami. Dom to też przestrzeń metaforyczna,
              zbiór pragnień, uczuć, możliwości. Dom równa się często:
              melancholia.
            </Text>
          </section>
          <section id="przestrzeń">
            <Text
              as="h3"
              margin="50px 0 26px"
              mobileMargin="32px 0 24px"
              fontSize="38px"
              lineHeight="46px"
              fontWeight="400"
            >
              Przestrzeń
            </Text>
            <Text special lineHeight="32px" letterSpacing="0.1em">
              Nasze wspomnienia wiążą się z przestrzeniami.
              <br />
              Wypełniamy architekturę.
              <br />A jaki wpływ architektura ma na nas?
              <br />
              Czym jest pamięć budynków? Ile tajemnic kryją szczeliny w
              podłogach, pęknięcia w ścianach?
              <br />
              Jeśli my wypełniamy architekturę, czy ona wypełnia nas?
              <br />
              Bywa, że przestrzeń nas ogranicza.
              <br />A w jaki sposób my ograniczamy przestrzeń?
              <br />
              Czy kamienica sprzed stu lat chce być odnowiona? I jeszcze raz? I
              jeszcze?
              <br />
              Czy chce mieć parking?
              <br />
              Czy odczuwa burzenie ścian? 
            </Text>
            <Text margin="44px 0 0" mobileMargin="24px 0 32px">
              Jeśli w jednym budynku mieszkalnym znajduje się dziesięć mieszkań,
              a przynajmniej w pięciu lokatorzy czują się samotni, to jak bardzo
              samotny czuje się budynek? O ile w ogóle... Te pytania
              towarzyszyły nam w czasie pracy nad tekstem „numer 9 mieszkania
              13”. 
            </Text>
          </section>
          <section id="kamienica">
            <Text
              as="h3"
              margin="60px 0 26px"
              mobileMargin="24px 0 20px"
              fontSize="38px"
              lineHeight="46px"
              fontWeight="400"
            >
              Kamienica
            </Text>
            <Text>
              Dramat rozpoczyna się w momencie przemiany, jaka zachodzi w
              głównej bohaterce - Kamienicy. Przemianie tej towarzyszą krótkie
              wypowiedzi współczesnych lokatorów budynku, nawiązujące do
              dokumentalnych wywiadów, w których każdy opowiada o nietypowym
              zajściu, jakie miało miejsce w ich budynku mieszkalnym.
            </Text>

            <Text margin="32px 0 0" mobileMargin="20px 0 0">
              Forma wywiadów jest pretekstem do tego, by poznać rodzaje
              samotności tych postaci, a co za tym idzie w punkcie kulminacyjnym
              - ich tęsknoty, pragnienia. Chciałyśmy, aby każdy z mieszkańców
              kamienicy w jakiś sposób prezentował pewien „model izolacji”, nie
              nawiązywałyśmy jednak wprost do tematu pandemii. Wydawało nam się
              bowiem, że i bez tego możemy zbudować postaci „zamknięte” w swoich
              domach, ale bardziej uniwersalne.
            </Text>
          </section>
          <section id="mieszkańcy">
            <Text
              as="h3"
              margin="26px 0 26px"
              fontSize="38px"
              lineHeight="46px"
              fontWeight="400"
            >
              Mieszkańcy
            </Text>
            <Text>
              Oprócz Kamienicy i lokatorów, w dramacie „numer 9 mieszkania 13”
              pojawia się jeszcze chór złożony z duchów wcześniejszych
              mieszkańców kamienicy, które roszczą sobie prawo do ścian, mebli,
              okien, przedmiotów użytku codziennego. Są niezaspokojone, nie
              potrafią opuścić przestrzeni, w której żyły kiedyś, trudno jest im
              się pogodzić z tym, że na ich miejscu pojawiają się inne osoby.
              Duchy sugerują, że na nowych mieszkańców starych mieszkań
              przechodzą losy poprzednich lokatorów.
            </Text>

            <Text margin="32px 0 0" mobileMargin="20px 0 0">
              Zestawienie realistycznych postaci, jakimi są lokatorzy z
              abstrakcyjnymi - Kamienicą, duchami oraz - tajemniczym Drzewem,
              które także wypowiada się w dramacie, pozwoliło nam budować
              narrację, w której biała plama naszej wyobraźni, historia budynku,
              przestrzeni, miejsca zabiera głos, podejmując radykalną decyzję o
              zmianie swojego bycia. Konsekwencje tej metamorfozy mogą być
              ostateczne, apokaliptyczne - już nie tylko dla budynku.
            </Text>

            <Text margin="32px 0 0" mobileMargin="20px 0 0">
              Rozprawiając o mieszkaniu, zawsze mówimy o czymś więcej. O czymś,
              co było przed nami, co jest i co, być może - będzie.
            </Text>

            <Text margin="32px 0 0" mobileMargin="20px 0 0">
              Zuzanna Bojda
            </Text>
          </section>
        </section>
        <StyledSection
          padding="62px 0 0"
          margin="62px 0 0"
          lineTop
          id="odczuwanie"
        >
          <SectionSpacer />
          <Text
            as="h2"
            margin="0 0 36px"
            fontSize="52px"
            lineHeight="60px"
            fontWeight="400"
          >
            Odczuwanie architektury
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            <span> Architektura to bardzo szczególna sztuka funkcjonalna:</span>{" "}
            zamyka przestrzeń, byśmy mogli w niej zamieszkać i ustanawia ramy
            dla naszego życia. […] Nawet najbardziej abstrakcyjna rzeźba,
            ograniczona do czysto geometrycznych form, nie stanie się
            architekturą, gdyż brak jej decydującego czynnika: użyteczności.
            Architektura to kształty tworzone wokół człowieka, formy służące
            mieszkaniu, a nie tylko oglądaniu od zewnątrz.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            <span> Architekt jest jakby producentem teatralnym,</span>{" "}
            człowiekiem aranżującym scenę, na której toczy się nasze życie. Od
            tego, w jaki sposób to zrobi, zależy nieskończenie wiele. Jeśli jego
            zamiary się powiodą, odegra rolę doskonałego gospodarza, który stara
            się zapewnić gościom wszelkie wygody, aby życie z nim było miłym
            doświadczeniem.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            Jednak
            <span> działalność producenta jest trudna z kilku powodów.</span> Po
            pierwsze, musi on wiedzieć, w jaki sposób aktorzy - którzy są
            całkiem zwykłymi ludźmi - zwykle grają; inaczej całe przedstawienie
            skończy się klapą. To, co w jednym środowisku kulturowym uznaje się
            za właściwe i naturalne, może okazać się całkiem nieodpowiednie w
            innym; to, co jest właściwe i odpowiednie w jednym pokoleniu, staje
            się śmieszne w następnym, gdyż ludzie zdążyli zmienić swe gusta i
            przyzwyczajenia.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            <span>
              Architekt ma także coś wspólnego z zakładającym park ogrodnikiem.
            </span>
            To jasne, że sukces ogrodnika zależy od właściwego doboru roślin.
            Nawet najpiękniejszy projekt parku na nic się nie zda, jeśli wybrane
            rośliny nie znajdą w nim właściwego dla siebie środowiska, jeśli nie
            będą mogły się tam rozwijać. Także i architekt pracuje z żywymi
            stworzeniami - z ludźmi, którzy są jeszcze bardziej nieprzewidywalni
            niż rośliny. Jeśli nie będą się dobrze czuć w zbudowanym dla nich
            domu, jego piękno pozostanie bezużyteczne, gdyż dom pozbawiony życia
            staje się pokraczny. Popada w zaniedbanie i ruinę, a potem zmienia
            się w coś całkiem sprzecznego z pierwotnymi zamierzeniami
            projektanta.
          </Text>
          <Text margin="62px 0 0" mobileMargin="32px 0 0">
            Istnieje jeszcze jedna, bardzo ważna cecha, której nie wolno pominąć
            przy określaniu prawdziwego charakteru architektury. Jest nim
            <span> proces twórczy</span> , czyli to, jak powstaje budynek.
            Architektura nie stanowi indywidualnego dzieła artysty, jak obrazy.
          </Text>
          <Text margin="50px 0 0" mobileMargin="32px 0 0">
            Dla pełnego zrozumienia architektury należy pamiętać, że wykonawcy
            nie są wrażliwymi muzykami, interpretującymi zapis nutowy,
            nadającymi mu szczególny wyraz, wydobywającymi taką czy inną frazę.
            Wręcz przeciwnie, są oni masą zwykłych ludzi, którzy - jak mrówki
            trudzące się wspólnie nad budową mrowiska - całkiem bezosobowo
            użyczają swych umiejętności, czasem nie rozumiejąc nawet tego, co
            pomagają stworzyć. […]{" "}
            <span>
              Budynek powstaje jak film bez gwiazdorów, jak rodzaj dokumentu, w
              którym wszystkie role obsadzono zwykłymi ludźmi.
            </span>
          </Text>
          <Text margin="50px 0 0" mobileMargin="32px 0 0">
            <span>
              Architektura nie jest zdolna do niesienia intymnego, osobistego
              przesłania; całkowicie brak jej wrażliwości emocjonalnej.
            </span>
            Jednak ten właśnie fakt prowadzi do czegoś pozytywnego. Architekt
            musi szukać formy, która jest bardziej wymowna i skończona niż szkic
            czy osobiste studium.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            Trzeba mieszkać w pokojach, czuć, jak się wokół zamykają, jak w
            naturalny sposób przechodzi się z jednego do drugiego.
            <span> Trzeba uzmysłowić sobie fakturę,</span> odkryć, dlaczego
            użyto takich, a nie innych kolorów, w jakiej mierze ich wybór
            zależał od zorientowania pokoi w stosunku do okien i światła
            słonecznego. Dwa mieszkania, położone jedno nad drugim, z pokojami o
            tych samych wymiarach i otworach, mogą być absolutnie inne dzięki
            zasłonom, tapetom i meblom.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            <span>
              Trzeba doświadczyć wpływu, jaki na koncepcję przestrzeni ma
              akustyka:{" "}
            </span>
            inaczej rozchodzi się dźwięk w wielkiej katedrze, budząc echa i
            długo wibrując w powietrzu, inaczej zaś w niewielkim, wyłożonym
            boazerią pokoju, wypełnionym zasłonami, dywanami i poduszkami.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            <span> Widzenie wymaga pewnej aktywności ze strony patrzącego</span>{" "}
            - nie wystarczy biernie czekać, by na siatkówce oka ukształtował się
            obraz. Siatkówka jest jak ekran kinowy, na którym nieustannie odbija
            się zmienny ciąg obrazów, ale kierujący wszystkim mózg świadomie
            notuje tylko nieliczne. Z drugiej strony wystarczy nam jedynie
            niejasne wrażenie wzrokowe albo wręcz drobny szczegół, byśmy uznali,
            że widzieliśmy taką czy inną rzecz.
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            Fragmenty pochodzą z książki „Odczuwanie architektury”
          </Text>
          <Text>Steen Eiler Rasmussen.</Text>
        </StyledSection>

        <StyledSection
          padding="62px 0 0"
          margin="62px 0 0"
          mobileMargin="40px 0 0"
          mobilePadding="40px 0 0"
          lineTop
          id="dotyk"
        >
          <SectionSpacer />
          <Text
            as="h2"
            margin="0 0 26px"
            fontSize="52px"
            lineHeight="60px"
            fontWeight="400"
          >
            O dotyku
          </Text>
          <Text>
            Jak encyklopedia definiuje tak oczywiste dla nas pojęcia, jak
            bliskość, czucie, dotyk?
          </Text>

          <Text margin="32px 0 0" mobileMargin="20px 0 0">
            „Dotyk, zmysł dotyku: rodzaj czucia, zdolność odczuwania działania
            bodźców mechanicznych na powierzchnię skóry za pomocą receptorów w
            skórze właściwej i głębokiej warstwie naskórka. Czucie:
            fizjologiczne odbieranie informacji ze środowiska zewnętrznego i
            wewnętrznego organizmu ludzkiego i zwierzęcego oraz przetwarzanie
            jej na wrażenia zmysłowe.”
          </Text>
          <section id="czułość drzew">
            <Text
              as="h3"
              margin="24px 0"
              fontSize="30px"
              lineHeight="36px"
              fontWeight="400"
            >
              Czułość drzew
            </Text>
            <Text>
              Dotyk jest czymś naturalnym, większość z nas go pragnie, wszyscy –
              potrzebują. „Odbieramy informację z zewnątrz” i przetwarzamy je na
              własne wrażenia – dotyk może nas stymulować na różne sposoby. Za
              pomocą tego zmysłu odczuwamy ból, przyjemność czy ulgę. Od
              pierwszych dni życia to czułość i bliskość rodzica wobec dziecka
              kształtują zdrowe więzi, przynoszące skutki w dorosłym życiu.
              Przytulamy się do bliskich nam osób. Owijamy szczelnie kocem w
              chłodny dzień. Popularna od kilku lat na całym świecie japońska,
              prozdrowotna praktyka  Shinrin-yoku, leśnych kąpieli, daje
              ukojenie poprzez bliski kontakt z naturą, a zwłaszcza – drzewami.
              Nawet pięciominutowe przytulenie pnia drzewa (w ciszy lasu i z
              wyłączonym telefonem komórkowym) redukuje stres, obniża ciśnienie
              krwi i dodaje energii. Czuły kontakt z naturą uspokaja, poprawia
              odporność, a nawet może pomóc w zaburzeniach snu.
            </Text>
          </section>
          <section id="eksperyment harlowa">
            <Text
              as="h3"
              margin="40px 0 20px"
              mobileMargin="32px 0 20px"
              fontSize="30px"
              lineHeight="36px"
              fontWeight="400"
            >
              Eksperyment Harlowa
            </Text>
            <Text>
              Już w latach 60. amerykański psycholog Harry Harlow przeprowadził
              pewien eksperyment – z etycznego punktu widzenia uznawany dziś za
              niepoprawny, ale dowodzący ogromnej potrzeby bliskości wszystkich
              żywych istot. Harlow oddzielił młode małpki – makaki od ich matek
              i umieścił w klatce z dwiema „sztucznymi” małpami-matkami – jedną
              wykonaną z twardego tworzywa, ale trzymającą butelkę z mlekiem dla
              małpek i drugą, szmacianą, miękką, lecz niewyposażoną w pokarm.
              Małpiątka częściej wybierały miękką kukłę, do której mogły się
              przytulić, w hierarchii stawiając potrzebę bliskości ponad
              odczuciem głodu.
            </Text>
          </section>
          <section id="temple">
            <Text
              as="h3"
              margin="40px 0 20px"
              mobileMargin="32px 0 20px"
              fontSize="30px"
              lineHeight="36px"
              fontWeight="400"
            >
              Temple i "maszyna do przytulania"
            </Text>
            <Text>
              Dla niektórych bezpośredni dotyk drugiego człowieka czy nawet
              przedmiotu jest trudny. Cierpiąca na autyzm Temple Grandin, której
              mózg jest zbudowany inaczej niż większości ludzi (podobnie jak
              mózgi wszystkich dotkniętych autyzmem), od dziecka borykała się z
              uczuciem nieprzystawalności. Fascynowały ją wirujące przedmioty,
              drażnił dźwięk spłukiwanej toalety, odgłosy ssania, alarmy. Miała
              trudności z algebrą, językiem, dopiero w wieku 4 lat (wspierana
              przez niezwykle zdeterminowaną matkę) nauczyła się mówić.
            </Text>
            <Text>
              Temple w wieku dojrzewania zaczęła doświadczać silnych lęków.
              Pracując na ranczu w Arizonie zupełnie przez przypadek odkryła,
              jak uspokajająco działa na zwierzęta wprowadzanie do specjalnego,
              uciskowego kojca - poskromu, w którym je umieszczano w celu np.
              wykonania zastrzyku. Silny ucisk działał na krowy wyciszająco.
              Niedługo później, podczas nagłego ataku paniki, Temple weszła do
              poskromu i ku swojemu zaskoczeniu - natychmiast poczuła się
              lepiej. Postanowiła zbudować podobne urządzenie także dla siebie.
            </Text>
            <Text
              margin="70px 0"
              mobileMargin="32px 0"
              fontSize="30px"
              lineHeight="41px"
            >
              „Po dodaniu miękkich obić poczułam coś innego, niż tylko
              odprężenie. Poczułam serdeczność w stosunku do ludzi, pojawiły się
              uczucia społeczne, miałam przyjemniejsze sny.”
            </Text>
          </section>
          <section id="dotyk">
            <Text
              as="h3"
              margin="0 0 20px"
              mobileMargin="0 0 24px"
              fontSize="30px"
              lineHeight="36px"
              fontWeight="400"
            >
              Czy czuły dotyk może boleć?
            </Text>
            <Text>
              Dla Temple bezpośredni dotyk drugiego człowieka nie był możliwy –
              nadwrażliwa na bodźce dziewczynka reagowała paniką, dotyk sprawiał
              jej niemalże fizyczny ból. Potrzeba dotyku – mimo jej schorzenia –
              nie została jednak stłumiona, Temple musiała jedynie znaleźć
              metodę na to, by móc kontrolować siłę, natężenie i czas ucisku.
            </Text>
            <Text>
              Stworzona przez nią „maszyna do przytulania” i wnikliwa obserwacja
              zachowania zwierząt pomogły jej ukończyć szkołę i studia z tytułem
              psychologa i zoologa. Dzięki swojej niezwykłej wrażliwości do dziś
              angażuje się w pomoc osobom cierpiącym na autyzm. Zajmuje się
              także projektowaniem specjalnych urządzeń do humanitarnego uboju
              zwierząt. Napisała wiele książek, prowadzi wykłady i szkolenia,
              które pomagają ludziom lepiej zrozumieć autystyków i ich sposób
              widzenia, a przede wszystkim – ODCZUWANIA świata.
            </Text>
          </section>
          <section id="blisko">
            <Text
              as="h3"
              margin="40px 0 20px"
              mobileMargin="32px 0 24px"
              fontSize="30px"
              lineHeight="36px"
              fontWeight="400"
            >
              Tak blisko, tak daleko
            </Text>
            <Text>
              Postać Temple Grandin i jej słynna maszyna do przytulania były
              inspiracją także dla twórców spektaklu „numer 9 mieszkania 13”, w
              którym bohaterowie – mieszkańcy jednej kamienicy, obcujący ze sobą
              na co dzień (przez sam fakt zamieszkiwania jednego budynku i
              mijania się na jego korytarzach), tak naprawdę zamknięci są w
              jednym miejscu – w  domu, będącym, jak pisze autorka „zbiorem
              pragnień, uczuć, możliwości”. Uczuć, które mimo bliskiej
              odległości i możności „dotknięcia” – czasem tak trudno jest
              zaspokoić.
            </Text>
            <Text margin="20px 0 0">Jagoda Prześluga</Text>
          </section>
        </StyledSection>
      </div>
    </MainWrapper>
  )
}

export default ContextContentSection
