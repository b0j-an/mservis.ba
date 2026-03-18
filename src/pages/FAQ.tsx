import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'Servis i popravke',
      items: [
        {
          question: 'Koliko traje popravka telefona?',
          answer: 'Vrijeme popravke zavisi od vrste kvara. Zamjena ekrana ili baterije obično traje 30-60 minuta, dok složenije popravke mogu trajati 1-3 dana. Nakon dijagnostike, dajemo preciznu procjenu vremena popravke.'
        },
        {
          question: 'Da li mogu čekati dok se telefon popravlja?',
          answer: 'Da, za standardne popravke kao što su zamjena ekrana ili baterije možete čekati u našem servisu. Imamo udoban prostor za čekanje, a proces obično traje 30-60 minuta.'
        },
        {
          question: 'Koja je garancija na popravku?',
          answer: 'Sve naše popravke dolaze sa garancijom od 6 mjeseci na ugrađene dijelove i izvršen rad. Garancija pokriva eventualnu neispravnost ugrađenih komponenti.'
        },
        {
          question: 'Koliko košta dijagnostika?',
          answer: 'Dijagnostika telefona je potpuno besplatna. Nakon utvrđivanja kvara, dajemo preciznu cijenu popravke. Plaćate samo ako se odlučite za popravku.'
        },
        {
          question: 'Da li radite popravke na licu mjesta?',
          answer: 'Da, većinu standardnih popravki (zamjena ekrana, baterije, stakla) radimo odmah u našem servisu dok čekate. Za složenije kvarove koji zahtijevaju specijalizovanu opremu može biti potrebno više vremena.'
        },
        {
          question: 'Šta ako moj model telefona nije raspoloživ za popravku?',
          answer: 'Radimo sa svim popularnim brendovima i modelima. Za rijetke modele možemo naručiti dijelove po potrebi, što obično traje 2-5 radnih dana. Kontaktirajte nas za provjeru dostupnosti.'
        }
      ]
    },
    {
      title: 'Ekran i displej',
      items: [
        {
          question: 'Koliko košta zamjena ekrana?',
          answer: 'Cijena zavisi od modela telefona. Za najpopularnije modele (Samsung, iPhone, Xiaomi) cijene se kreću od 50 do 200 KM. Kontaktirajte nas za preciznu cijenu za vaš model.'
        },
        {
          question: 'Da li koristite originalne dijelove?',
          answer: 'Nudimo i originalne i kvalitetne kompatibilne dijelove. Originalni dijelovi su skuplji ali garantuju potpunu kompatibilnost. Kompatibilni dijelovi su testirana alternativa po pristupačnijoj cijeni. Vi birate šta vam odgovara.'
        },
        {
          question: 'Da li se mijenja samo staklo ili cijeli ekran?',
          answer: 'Kod modernih telefona, staklo, touch panel i LCD su spojeni u jednu cjelinu, pa se mijenja kompletan ekran. To garantuje najbolji kvalitet i funkcionalnost nakon zamjene.'
        },
        {
          question: 'Hoće li telefon biti vodootporan nakon zamjene ekrana?',
          answer: 'Trudimo se da očuvamo vodootpornost koliko je moguće koristeći specijalna ljepila i brtvila. Međutim, ne možemo garantovati istu razinu zaštite kao kod fabričke montaže, pa preporučujemo oprez sa vodom nakon popravke.'
        }
      ]
    },
    {
      title: 'Baterija i punjenje',
      items: [
        {
          question: 'Kada treba zamijeniti bateriju?',
          answer: 'Bateriju treba zamijeniti ako se telefon brzo prazni (manje od dana uz normalno korištenje), gasi se na visokom procentu, sporo puni, ili se telefon pregrijava. Također, ako je baterija naduta, hitno je donesite na zamjenu.'
        },
        {
          question: 'Koliko košta zamjena baterije?',
          answer: 'Cijena zavisi od modela. Za većinu telefona, zamjena baterije košta između 30 i 80 KM. Koristimo kvalitetne baterije sa garancijom.'
        },
        {
          question: 'Telefon se ne puni, šta može biti problem?',
          answer: 'Problem može biti konektor punjenja, kabl, punjač ili softverski problem. Besplatna dijagnostika će pokazati tačan uzrok. Najčešće je problem prljav ili oštećen konektor punjenja.'
        },
        {
          question: 'Koliko traje zamjena baterije?',
          answer: 'Zamjena baterije obično traje 30-45 minuta. Možete čekati u servisu dok radimo zamjenu.'
        },
        {
          question: 'Da li mogu donijeti svoju bateriju za ugradnju?',
          answer: 'Ne preporučujemo to jer ne možemo garantovati kvalitet i sigurnost baterija koje nismo mi nabavili. Koristimo provjerene dobavljače i dajemo garanciju na sve baterije koje ugradimo.'
        }
      ]
    },
    {
      title: 'Podaci i softver',
      items: [
        {
          question: 'Hoće li moji podaci biti obrisani nakon popravke?',
          answer: 'Ne, hardverske popravke (ekran, baterija, kamera) ne utiču na podatke. Međutim, kod softverskih problema ponekad je potrebno resetovanje sistema. U tom slučaju, uvijek vas prethodno obavještavamo i nudimo opciju spašavanja podataka.'
        },
        {
          question: 'Možete li prebaciti podatke sa starog na novi telefon?',
          answer: 'Da, nudimo uslugu prenosa podataka između telefona (kontakti, slike, videa, aplikacije). Proces traje 30-60 minuta zavisno od količine podataka. Cijena usluge je 20 KM.'
        },
        {
          question: 'Možete li spasiti podatke sa pokvarenog telefona?',
          answer: 'U većini slučajeva možemo spasiti podatke čak i sa telefona koji se ne pale. Uspješnost zavisi od vrste kvara. Besplatno provjera vamo mogućnost oporavka podataka.'
        },
        {
          question: 'Da li radite instalaciju aplikacija i podešavanje telefona?',
          answer: 'Da, možemo instalirati aplikacije, podesiti email, društvene mreže, internet i ostale postavke. Takođe nudimo obuku za starije korisnike kako da koriste osnovne funkcije telefona.'
        },
        {
          question: 'Možete li otključati telefon?',
          answer: 'Možemo otključati telefone sa operaterskih mreža (network unlock). Ne radimo otključavanje ukradenih telefona ili telefona za koje nemate dokaz vlasništva.'
        }
      ]
    },
    {
      title: 'Kupovina i prodaja',
      items: [
        {
          question: 'Da li nudite garanciju na polovne telefone?',
          answer: 'Da, svi polovni telefoni koje prodajemo imaju garanciju od 30 dana. Telefoni su detaljno testirani i potpuno ispravni.'
        },
        {
          question: 'Kako mogu prodati svoj telefon?',
          answer: 'Donesite telefon u naš servis i mi ćemo izvršiti besplatnu procjenu. Ako vam odgovara cijena, isplaćujemo odmah u gotovini ili možete otkupninu iskoristiti kao popust pri kupovini novog telefona.'
        },
        {
          question: 'Šta utiče na otkupnu cijenu telefona?',
          answer: 'Cijena zavisi od modela, starosti, stanja uređaja, ispravnosti svih funkcija i tržišne potražnje. Telefoni u boljem stanju, sa originalnom ambalažom i priborom imaju veću vrijednost.'
        },
        {
          question: 'Da li prihvatate telefone sa malim oštećenjima?',
          answer: 'Da, otkupljujemo i telefone sa oštećenjima (razbijen ekran, ogrebotine), ali je cijena niža. Kontaktirajte nas za procjenu vrijednosti.'
        },
        {
          question: 'Mogu li zamijeniti svoj stari telefon za novi?',
          answer: 'Da, možete zamijeniti stari telefon uz doplatu za novi ili polovan telefon iz naše ponude. Vrijednost starog telefona odbijamo od cijene novog.'
        },
        {
          question: 'Da li imam pravo na povrat novca?',
          answer: 'Za nove telefone, imate pravo na povrat u roku od 14 dana ako proizvod nije korišten i u originalnom je pakovanju. Za polovne telefone, možete vratiti telefon u roku od 7 dana ako postoji neispravnost koja nije bila navedena pri kupovini.'
        }
      ]
    },
    {
      title: 'Oprema i dodaci',
      items: [
        {
          question: 'Da li imate opremu za moj model telefona?',
          answer: 'Imamo širok asortiman opreme za najpopularnije brendove (Samsung, iPhone, Xiaomi, Huawei). Za specifične modele možemo naručiti opremu u roku od 2-3 dana.'
        },
        {
          question: 'Koja je razlika između zaštitnog stakla i folije?',
          answer: 'Zaštitno staklo (kaljeno staklo) je deblje i pruža bolju zaštitu od udaraca i pucanja ekrana. Folija je tanja i štiti samo od ogrebotina. Preporučujemo zaštitno staklo kao bolju opciju.'
        },
        {
          question: 'Da li postavljate zaštitna stakla besplatno?',
          answer: 'Da, svako kupljeno zaštitno staklo postavljamo besplatno u našem servisu. Koristimo profesionalnu opremu za postavljanje bez mjehurica i prašine.'
        },
        {
          question: 'Mogu li vratiti opremu ako mi ne odgovara?',
          answer: 'Da, nekorištenu opremu u originalnom pakovanju možete vratiti u roku od 7 dana. Oprema ne smije biti oštećena ili korištena.'
        },
        {
          question: 'Da li nudite popuste pri kupovini više artikala?',
          answer: 'Da, nudimo popuste pri kupovini paketa (npr. maska + staklo), kao i redovne akcije i promotivne cijene. Pratite nas ili pitajte u servisu o trenutnim akcijama.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-primary to-red-dark text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Česta pitanja
          </h1>
          <p className="text-xl text-red-light max-w-3xl">
            Odgovori na najčešća pitanja naših klijenata
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 pb-3 border-b-2 border-red-primary">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems.includes(itemId);

                    return (
                      <div
                        key={itemId}
                        className="border border-neutral-200 rounded-lg overflow-hidden hover:border-red-primary transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-semibold text-neutral-900 pr-4">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-red-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                            <p className="text-neutral-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-red-primary to-red-dark text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Niste pronašli odgovor na vaše pitanje?
            </h3>
            <p className="text-red-light mb-6">
              Slobodno nas kontaktirajte, rado ćemo vam pomoći!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+38765123456"
                className="bg-white text-red-primary px-6 py-3 rounded-lg font-semibold hover:bg-red-light hover:text-white transition-colors"
              >
                Pozovite nas: +387 65 123 456
              </a>
              <a
                href="mailto:info@mservis.ba"
                className="bg-white text-red-primary px-6 py-3 rounded-lg font-semibold hover:bg-red-light hover:text-white transition-colors"
              >
                Pošaljite email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
