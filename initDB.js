load("clearDB.js");
use('GarbageCollectors');
// -----------------------LOAD LOCATIONS -----------------------
const jsonStreets = `[
    {
     "city": "Praha",
     "street": "Adolfa Doležala"
    },
    {
     "city": "Brno",
     "street": "Akademika Bedrny"
    },
    {
     "city": "Ostrava",
     "street": "Akademika Heyrovského"
    },
    {
     "city": "Plzeň",
     "street": "Akátová"
    },
    {
     "city": "Liberec",
     "street": "Albertova"
    },
    {
     "city": "Olomouc",
     "street": "A. Malé"
    },
    {
     "city": "České Budějovice",
     "street": "Ambrožova"
    },
    {
     "city": "Hradec Králové",
     "street": "Anenské náměstí"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Antala Staška"
    },
    {
     "city": "Pardubice",
     "street": "Antonína Dvořáka"
    },
    {
     "city": "Zlín",
     "street": "Antonína Petrofa"
    },
    {
     "city": "Havířov",
     "street": "Baarova"
    },
    {
     "city": "Kladno",
     "street": "Balbínova"
    },
    {
     "city": "Most",
     "street": "Banskobystrická"
    },
    {
     "city": "Opava",
     "street": "Baťkovo náměstí"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Bekova"
    },
    {
     "city": "Jihlava",
     "street": "Bělečská"
    },
    {
     "city": "Karviná",
     "street": "Bendlova"
    },
    {
     "city": "Teplice",
     "street": "Bezejmenná"
    },
    {
     "city": "Děčín",
     "street": "Bezová"
    },
    {
     "city": "Praha",
     "street": "Bezručova"
    },
    {
     "city": "Brno",
     "street": "Bidlova"
    },
    {
     "city": "Ostrava",
     "street": "Bieblova"
    },
    {
     "city": "Plzeň",
     "street": "Blahoslavova"
    },
    {
     "city": "Liberec",
     "street": "Blažíčkovo náměstí"
    },
    {
     "city": "Olomouc",
     "street": "Blodkova"
    },
    {
     "city": "České Budějovice",
     "street": "Boční"
    },
    {
     "city": "Hradec Králové",
     "street": "Bohdanečská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Bohuslava Martinů"
    },
    {
     "city": "Pardubice",
     "street": "Boleslavova"
    },
    {
     "city": "Zlín",
     "street": "Bono publico"
    },
    {
     "city": "Havířov",
     "street": "Borová"
    },
    {
     "city": "Kladno",
     "street": "Borovinka"
    },
    {
     "city": "Most",
     "street": "Botanická"
    },
    {
     "city": "Opava",
     "street": "Bozděchova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Boženy Němcové"
    },
    {
     "city": "Jihlava",
     "street": "Brandlova"
    },
    {
     "city": "Karviná",
     "street": "Bratří Čapků"
    },
    {
     "city": "Teplice",
     "street": "Bratří Štefanů"
    },
    {
     "city": "Děčín",
     "street": "Brněnská"
    },
    {
     "city": "Praha",
     "street": "Brožíkova"
    },
    {
     "city": "Brno",
     "street": "Břetislavova"
    },
    {
     "city": "Ostrava",
     "street": "Březhradská"
    },
    {
     "city": "Plzeň",
     "street": "Březová"
    },
    {
     "city": "Liberec",
     "street": "Břidličná"
    },
    {
     "city": "Olomouc",
     "street": "Buková"
    },
    {
     "city": "České Budějovice",
     "street": "Buzulucká"
    },
    {
     "city": "Hradec Králové",
     "street": "Cejpova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Cihlářská"
    },
    {
     "city": "Pardubice",
     "street": "Cimlerova"
    },
    {
     "city": "Zlín",
     "street": "Citrusová"
    },
    {
     "city": "Havířov",
     "street": "Collinova"
    },
    {
     "city": "Kladno",
     "street": "Čajkovského"
    },
    {
     "city": "Most",
     "street": "Čechova"
    },
    {
     "city": "Opava",
     "street": "Čelakovského"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Černilovská"
    },
    {
     "city": "Jihlava",
     "street": "Červeného"
    },
    {
     "city": "Karviná",
     "street": "Červený Dvůr"
    },
    {
     "city": "Teplice",
     "street": "Československé armády"
    },
    {
     "city": "Děčín",
     "street": "Dědkova"
    },
    {
     "city": "Praha",
     "street": "Dělnická"
    },
    {
     "city": "Brno",
     "street": "Denisovo náměstí"
    },
    {
     "city": "Ostrava",
     "street": "Divecká"
    },
    {
     "city": "Plzeň",
     "street": "Divišova"
    },
    {
     "city": "Liberec",
     "street": "Dlouhá"
    },
    {
     "city": "Olomouc",
     "street": "Dobroslavova"
    },
    {
     "city": "České Budějovice",
     "street": "Dobrovského"
    },
    {
     "city": "Hradec Králové",
     "street": "Dolní"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Do Luh"
    },
    {
     "city": "Pardubice",
     "street": "Domečkova"
    },
    {
     "city": "Zlín",
     "street": "Drahoňovského"
    },
    {
     "city": "Havířov",
     "street": "Drtinova"
    },
    {
     "city": "Kladno",
     "street": "Družstevní"
    },
    {
     "city": "Most",
     "street": "Dřevařská"
    },
    {
     "city": "Opava",
     "street": "Dubina"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Dubinská"
    },
    {
     "city": "Jihlava",
     "street": "Dubová"
    },
    {
     "city": "Karviná",
     "street": "Dukelská třída"
    },
    {
     "city": "Teplice",
     "street": "Durychova"
    },
    {
     "city": "Děčín",
     "street": "Dvorská"
    },
    {
     "city": "Praha",
     "street": "Dykova"
    },
    {
     "city": "Brno",
     "street": "Eliščino nábřeží"
    },
    {
     "city": "Ostrava",
     "street": "Emy Destinnové"
    },
    {
     "city": "Plzeň",
     "street": "Erbenova"
    },
    {
     "city": "Liberec",
     "street": "Exnárova"
    },
    {
     "city": "Olomouc",
     "street": "Farářství"
    },
    {
     "city": "České Budějovice",
     "street": "Fibichova"
    },
    {
     "city": "Hradec Králové",
     "street": "Foerstrova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Formánkova"
    },
    {
     "city": "Pardubice",
     "street": "Fráni Šrámka"
    },
    {
     "city": "Zlín",
     "street": "Františka Halase"
    },
    {
     "city": "Havířov",
     "street": "Františka Komárka"
    },
    {
     "city": "Kladno",
     "street": "Františka Šubrta"
    },
    {
     "city": "Most",
     "street": "Františka Žaloudka"
    },
    {
     "city": "Opava",
     "street": "Franušova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Fričova"
    },
    {
     "city": "Jihlava",
     "street": "Fr. Tichého"
    },
    {
     "city": "Karviná",
     "street": "Fučíkova"
    },
    {
     "city": "Teplice",
     "street": "Gagarinova"
    },
    {
     "city": "Děčín",
     "street": "Gebauerova"
    },
    {
     "city": "Praha",
     "street": "Gočárova třída"
    },
    {
     "city": "Brno",
     "street": "Gogolova"
    },
    {
     "city": "Ostrava",
     "street": "Gollova"
    },
    {
     "city": "Plzeň",
     "street": "Grégrovo náměstí"
    },
    {
     "city": "Liberec",
     "street": "Gruzínská"
    },
    {
     "city": "Olomouc",
     "street": "Habrmanova"
    },
    {
     "city": "České Budějovice",
     "street": "Hálkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Hannova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Haškova"
    },
    {
     "city": "Pardubice",
     "street": "Havlíčkova"
    },
    {
     "city": "Zlín",
     "street": "Herbenova"
    },
    {
     "city": "Havířov",
     "street": "Heřmanova"
    },
    {
     "city": "Kladno",
     "street": "Hlavní"
    },
    {
     "city": "Most",
     "street": "Hoděšovická"
    },
    {
     "city": "Opava",
     "street": "Holečkova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Holická"
    },
    {
     "city": "Jihlava",
     "street": "Holubova"
    },
    {
     "city": "Karviná",
     "street": "Honkova"
    },
    {
     "city": "Teplice",
     "street": "Horní"
    },
    {
     "city": "Děčín",
     "street": "Horova"
    },
    {
     "city": "Praha",
     "street": "Hořická"
    },
    {
     "city": "Brno",
     "street": "Hostivítova"
    },
    {
     "city": "Ostrava",
     "street": "Hradební"
    },
    {
     "city": "Plzeň",
     "street": "Hradecká"
    },
    {
     "city": "Liberec",
     "street": "Hradečnice"
    },
    {
     "city": "Olomouc",
     "street": "Hrdého"
    },
    {
     "city": "České Budějovice",
     "street": "Hronkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Hrubínova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Husitská"
    },
    {
     "city": "Pardubice",
     "street": "Husova"
    },
    {
     "city": "Zlín",
     "street": "Chaloupky"
    },
    {
     "city": "Havířov",
     "street": "Chelčického"
    },
    {
     "city": "Kladno",
     "street": "Chmelova"
    },
    {
     "city": "Most",
     "street": "Ignáta Herrmanna"
    },
    {
     "city": "Opava",
     "street": "Ivana Olbrachta"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Jabloňová"
    },
    {
     "city": "Jihlava",
     "street": "Jalovcová"
    },
    {
     "city": "Karviná",
     "street": "Jana Černého"
    },
    {
     "city": "Teplice",
     "street": "Jana Koziny"
    },
    {
     "city": "Děčín",
     "street": "Jana Krušinky"
    },
    {
     "city": "Praha",
     "street": "Jana Masaryka"
    },
    {
     "city": "Brno",
     "street": "Janáčkova"
    },
    {
     "city": "Ostrava",
     "street": "Jandova"
    },
    {
     "city": "Plzeň",
     "street": "Jánošíkova"
    },
    {
     "city": "Liberec",
     "street": "Jaroměřská"
    },
    {
     "city": "Olomouc",
     "street": "Jarošova"
    },
    {
     "city": "České Budějovice",
     "street": "Jasanová"
    },
    {
     "city": "Hradec Králové",
     "street": "Jasmínová"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Jatečný plácek"
    },
    {
     "city": "Pardubice",
     "street": "Javorová"
    },
    {
     "city": "Zlín",
     "street": "Ječná"
    },
    {
     "city": "Havířov",
     "street": "Jedlová"
    },
    {
     "city": "Kladno",
     "street": "Jeronýmova"
    },
    {
     "city": "Most",
     "street": "Jičínská"
    },
    {
     "city": "Opava",
     "street": "Jilmová"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Jindrova"
    },
    {
     "city": "Jihlava",
     "street": "Jiráskova"
    },
    {
     "city": "Karviná",
     "street": "Jiráskovo náměstí"
    },
    {
     "city": "Teplice",
     "street": "Jiráskovy sady"
    },
    {
     "city": "Děčín",
     "street": "Jiřího Purkyně"
    },
    {
     "city": "Praha",
     "street": "Jižní"
    },
    {
     "city": "Brno",
     "street": "Jungmannova"
    },
    {
     "city": "Ostrava",
     "street": "Kalendova"
    },
    {
     "city": "Plzeň",
     "street": "K Aleji"
    },
    {
     "city": "Liberec",
     "street": "Kampanova"
    },
    {
     "city": "Olomouc",
     "street": "Kampelíkova"
    },
    {
     "city": "České Budějovice",
     "street": "Kaplířova"
    },
    {
     "city": "Hradec Králové",
     "street": "Karla Čapka"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Karla Hynka Máchy"
    },
    {
     "city": "Pardubice",
     "street": "Karla Tomana"
    },
    {
     "city": "Zlín",
     "street": "Karoliny Světlé"
    },
    {
     "city": "Havířov",
     "street": "Kaštanová"
    },
    {
     "city": "Kladno",
     "street": "Kavčí plácek"
    },
    {
     "city": "Most",
     "street": "K Biřičce"
    },
    {
     "city": "Opava",
     "street": "K Borku"
    },
    {
     "city": "Frýdek-Místek",
     "street": "K Břízkám"
    },
    {
     "city": "Jihlava",
     "street": "K Cikánu"
    },
    {
     "city": "Karviná",
     "street": "K Dehetníku"
    },
    {
     "city": "Teplice",
     "street": "K Dolíkám"
    },
    {
     "city": "Děčín",
     "street": "Kejzlarova"
    },
    {
     "city": "Praha",
     "street": "Ke Kopaninám"
    },
    {
     "city": "Brno",
     "street": "Ke Křížku"
    },
    {
     "city": "Ostrava",
     "street": "Ke Splavu"
    },
    {
     "city": "Plzeň",
     "street": "K Hvězdárně"
    },
    {
     "city": "Liberec",
     "street": "K Chatám"
    },
    {
     "city": "Olomouc",
     "street": "K Labi"
    },
    {
     "city": "České Budějovice",
     "street": "Klacovská"
    },
    {
     "city": "Hradec Králové",
     "street": "Kladská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Klášterského"
    },
    {
     "city": "Pardubice",
     "street": "Kleinerových"
    },
    {
     "city": "Zlín",
     "street": "K Lesu"
    },
    {
     "city": "Havířov",
     "street": "Klicperova"
    },
    {
     "city": "Kladno",
     "street": "Klidná"
    },
    {
     "city": "Most",
     "street": "Klumparova"
    },
    {
     "city": "Opava",
     "street": "K Metelce"
    },
    {
     "city": "Frýdek-Místek",
     "street": "K Meteoru"
    },
    {
     "city": "Jihlava",
     "street": "Kmochova"
    },
    {
     "city": "Karviná",
     "street": "Kociánovice"
    },
    {
     "city": "Teplice",
     "street": "Kochanova"
    },
    {
     "city": "Děčín",
     "street": "Kollárova"
    },
    {
     "city": "Praha",
     "street": "Komenského"
    },
    {
     "city": "Brno",
     "street": "Kopretinová"
    },
    {
     "city": "Ostrava",
     "street": "Kotěrova"
    },
    {
     "city": "Plzeň",
     "street": "Kotrčova"
    },
    {
     "city": "Liberec",
     "street": "Koutníkova"
    },
    {
     "city": "Olomouc",
     "street": "Kovová"
    },
    {
     "city": "České Budějovice",
     "street": "Koželužská"
    },
    {
     "city": "Hradec Králové",
     "street": "K Orlici"
    },
    {
     "city": "Ústí nad Labem",
     "street": "K Osadě"
    },
    {
     "city": "Pardubice",
     "street": "K Polabinám"
    },
    {
     "city": "Zlín",
     "street": "K Potoku"
    },
    {
     "city": "Havířov",
     "street": "K Radaru"
    },
    {
     "city": "Kladno",
     "street": "Kpt. Fechtnera"
    },
    {
     "city": "Most",
     "street": "Krapkova"
    },
    {
     "city": "Opava",
     "street": "Krátká"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Krunertova"
    },
    {
     "city": "Jihlava",
     "street": "K Rybníku"
    },
    {
     "city": "Karviná",
     "street": "Křivá"
    },
    {
     "city": "Teplice",
     "street": "Křižíkova"
    },
    {
     "city": "Děčín",
     "street": "Křížkovského"
    },
    {
     "city": "Praha",
     "street": "K Sokolovně"
    },
    {
     "city": "Brno",
     "street": "Kubcova"
    },
    {
     "city": "Ostrava",
     "street": "Kubelíkova"
    },
    {
     "city": "Plzeň",
     "street": "Kubištova"
    },
    {
     "city": "Liberec",
     "street": "Kubištovy sady"
    },
    {
     "city": "Olomouc",
     "street": "Kudrnova"
    },
    {
     "city": "České Budějovice",
     "street": "Kuklenská"
    },
    {
     "city": "Hradec Králové",
     "street": "Kutnohorská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "K Úvrati"
    },
    {
     "city": "Pardubice",
     "street": "Květná"
    },
    {
     "city": "Zlín",
     "street": "Kydlinovská"
    },
    {
     "city": "Havířov",
     "street": "Kyjevská"
    },
    {
     "city": "Kladno",
     "street": "Kyjovská"
    },
    {
     "city": "Most",
     "street": "K Zastávce"
    },
    {
     "city": "Opava",
     "street": "Labská kotlina"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Labská louka"
    },
    {
     "city": "Jihlava",
     "street": "Labská vodárna"
    },
    {
     "city": "Karviná",
     "street": "Labská zahrada"
    },
    {
     "city": "Teplice",
     "street": "Ladova"
    },
    {
     "city": "Děčín",
     "street": "Leknínová"
    },
    {
     "city": "Praha",
     "street": "Lesní"
    },
    {
     "city": "Brno",
     "street": "Letců"
    },
    {
     "city": "Ostrava",
     "street": "Letiště"
    },
    {
     "city": "Plzeň",
     "street": "Ležáky"
    },
    {
     "city": "Liberec",
     "street": "Lhotecká"
    },
    {
     "city": "Olomouc",
     "street": "Libišanská"
    },
    {
     "city": "České Budějovice",
     "street": "Librantická"
    },
    {
     "city": "Hradec Králové",
     "street": "Lidická"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Lipová"
    },
    {
     "city": "Pardubice",
     "street": "Líznerova"
    },
    {
     "city": "Zlín",
     "street": "Lomená"
    },
    {
     "city": "Havířov",
     "street": "Luční"
    },
    {
     "city": "Kladno",
     "street": "Ludovíta Štúra"
    },
    {
     "city": "Most",
     "street": "Lužická"
    },
    {
     "city": "Opava",
     "street": "Machkova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Machovcova"
    },
    {
     "city": "Jihlava",
     "street": "Malá"
    },
    {
     "city": "Karviná",
     "street": "Malé náměstí"
    },
    {
     "city": "Teplice",
     "street": "Malinová"
    },
    {
     "city": "Děčín",
     "street": "Malšovická"
    },
    {
     "city": "Praha",
     "street": "M. D. Rettigové"
    },
    {
     "city": "Brno",
     "street": "Mandysova"
    },
    {
     "city": "Ostrava",
     "street": "Mánesova"
    },
    {
     "city": "Plzeň",
     "street": "Manželů Zemánkových"
    },
    {
     "city": "Liberec",
     "street": "Marie Pujmanové"
    },
    {
     "city": "Olomouc",
     "street": "Markova"
    },
    {
     "city": "České Budějovice",
     "street": "Markovice"
    },
    {
     "city": "Hradec Králové",
     "street": "Markovická"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Mařákova"
    },
    {
     "city": "Pardubice",
     "street": "Masarykovo náměstí"
    },
    {
     "city": "Zlín",
     "street": "Maxe Malého"
    },
    {
     "city": "Havířov",
     "street": "Medkova"
    },
    {
     "city": "Kladno",
     "street": "Meruňková"
    },
    {
     "city": "Most",
     "street": "Mikoláše Alše"
    },
    {
     "city": "Opava",
     "street": "Milady Horákové"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Miroslava Hájka"
    },
    {
     "city": "Jihlava",
     "street": "Miřiovského"
    },
    {
     "city": "Karviná",
     "street": "Mládeže"
    },
    {
     "city": "Teplice",
     "street": "Mlýnská"
    },
    {
     "city": "Děčín",
     "street": "M. Majerové"
    },
    {
     "city": "Praha",
     "street": "Modřínová"
    },
    {
     "city": "Brno",
     "street": "Mokrá"
    },
    {
     "city": "Ostrava",
     "street": "Moravská"
    },
    {
     "city": "Plzeň",
     "street": "Moravský most"
    },
    {
     "city": "Liberec",
     "street": "most Plukovníka Šrámka"
    },
    {
     "city": "Olomouc",
     "street": "Mostecká"
    },
    {
     "city": "České Budějovice",
     "street": "Mrštíkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Mužíkova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Myslbekova"
    },
    {
     "city": "Pardubice",
     "street": "Myslivečkova"
    },
    {
     "city": "Zlín",
     "street": "Mýtská"
    },
    {
     "city": "Havířov",
     "street": "Na Barvínku"
    },
    {
     "city": "Kladno",
     "street": "Na Biřičce"
    },
    {
     "city": "Most",
     "street": "Na Brně"
    },
    {
     "city": "Opava",
     "street": "Na Břehách"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Nábřeží U Přívozu"
    },
    {
     "city": "Jihlava",
     "street": "Na Cvičišti"
    },
    {
     "city": "Karviná",
     "street": "Nad Oborou"
    },
    {
     "city": "Teplice",
     "street": "Na Drahách"
    },
    {
     "city": "Děčín",
     "street": "Na Drážkách"
    },
    {
     "city": "Praha",
     "street": "Náchodská"
    },
    {
     "city": "Brno",
     "street": "Nádražní"
    },
    {
     "city": "Ostrava",
     "street": "Nad Rozárkou"
    },
    {
     "city": "Plzeň",
     "street": "Nad Rybníky"
    },
    {
     "city": "Liberec",
     "street": "Na Dřevěnce"
    },
    {
     "city": "Olomouc",
     "street": "Na Dubech"
    },
    {
     "city": "České Budějovice",
     "street": "Na Důchodě"
    },
    {
     "city": "Hradec Králové",
     "street": "Na Sadech"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Náhon"
    },
    {
     "city": "Pardubice",
     "street": "Na Hradě"
    },
    {
     "city": "Zlín",
     "street": "Na Hrázce"
    },
    {
     "city": "Havířov",
     "street": "Na Humpolci"
    },
    {
     "city": "Kladno",
     "street": "Na Jezírkách"
    },
    {
     "city": "Most",
     "street": "Na Konečné"
    },
    {
     "city": "Opava",
     "street": "Na Kopečku"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Na Kotli"
    },
    {
     "city": "Jihlava",
     "street": "Na Kopci"
    },
    {
     "city": "Karviná",
     "street": "Na Kropáčce"
    },
    {
     "city": "Teplice",
     "street": "Nálepkova"
    },
    {
     "city": "Děčín",
     "street": "Na Letné"
    },
    {
     "city": "Praha",
     "street": "Na Lučinách"
    },
    {
     "city": "Brno",
     "street": "náměstí 28. října"
    },
    {
     "city": "Ostrava",
     "street": "náměstí E. F. Buriana"
    },
    {
     "city": "Plzeň",
     "street": "náměstí Jana Pavla II."
    },
    {
     "city": "Liberec",
     "street": "náměstí Osvoboditelů"
    },
    {
     "city": "Olomouc",
     "street": "náměstí Svobody"
    },
    {
     "city": "České Budějovice",
     "street": "náměstí Václava Havla"
    },
    {
     "city": "Hradec Králové",
     "street": "náměstí 5. května"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Na Mlejnku"
    },
    {
     "city": "Pardubice",
     "street": "Na Občinách"
    },
    {
     "city": "Zlín",
     "street": "Na Ohradě"
    },
    {
     "city": "Havířov",
     "street": "Na Okrouhlíku"
    },
    {
     "city": "Kladno",
     "street": "Na Opuce"
    },
    {
     "city": "Most",
     "street": "Na Paloukách"
    },
    {
     "city": "Opava",
     "street": "Na Pastvinách"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Na Pískách"
    },
    {
     "city": "Jihlava",
     "street": "Na Plachtě"
    },
    {
     "city": "Karviná",
     "street": "Na Potoce"
    },
    {
     "city": "Teplice",
     "street": "Národních mučedníků"
    },
    {
     "city": "Děčín",
     "street": "Na Rozhraní"
    },
    {
     "city": "Praha",
     "street": "Na Rybárně"
    },
    {
     "city": "Brno",
     "street": "Na Rybníce"
    },
    {
     "city": "Ostrava",
     "street": "Na Sádkách"
    },
    {
     "city": "Plzeň",
     "street": "Na Stávku"
    },
    {
     "city": "Liberec",
     "street": "Na Stružce"
    },
    {
     "city": "Olomouc",
     "street": "Na Střezině"
    },
    {
     "city": "České Budějovice",
     "street": "Na Úvoze"
    },
    {
     "city": "Hradec Králové",
     "street": "Na Valince"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Na Valše"
    },
    {
     "city": "Pardubice",
     "street": "Na Vinicích"
    },
    {
     "city": "Zlín",
     "street": "Na Výsluní"
    },
    {
     "city": "Havířov",
     "street": "Na Zahrádkách"
    },
    {
     "city": "Kladno",
     "street": "Na Zálesí"
    },
    {
     "city": "Most",
     "street": "Nemocnice"
    },
    {
     "city": "Opava",
     "street": "Nerudova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Oldřichova"
    },
    {
     "city": "Jihlava",
     "street": "Olšová"
    },
    {
     "city": "Karviná",
     "street": "Opatovická"
    },
    {
     "city": "Teplice",
     "street": "Opletalova"
    },
    {
     "city": "Děčín",
     "street": "Orebská"
    },
    {
     "city": "Praha",
     "street": "Orlická"
    },
    {
     "city": "Brno",
     "street": "Orlické nábřeží"
    },
    {
     "city": "Ostrava",
     "street": "Orlický most"
    },
    {
     "city": "Plzeň",
     "street": "Orličan"
    },
    {
     "city": "Liberec",
     "street": "Ořechová"
    },
    {
     "city": "Olomouc",
     "street": "Osada vycházejícího slunce"
    },
    {
     "city": "České Budějovice",
     "street": "Osiková"
    },
    {
     "city": "Hradec Králové",
     "street": "Oskara Nedbala"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Ostrov"
    },
    {
     "city": "Pardubice",
     "street": "Ostrovní"
    },
    {
     "city": "Zlín",
     "street": "Ostružinová"
    },
    {
     "city": "Havířov",
     "street": "Otokara Březiny"
    },
    {
     "city": "Kladno",
     "street": "Ovocnářská"
    },
    {
     "city": "Most",
     "street": "Parlament"
    },
    {
     "city": "Opava",
     "street": "Partyzánská"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Pavla Hanuše"
    },
    {
     "city": "Jihlava",
     "street": "Pekařova"
    },
    {
     "city": "Karviná",
     "street": "Pelclova"
    },
    {
     "city": "Teplice",
     "street": "Pešinova"
    },
    {
     "city": "Děčín",
     "street": "Petra Jilemnického"
    },
    {
     "city": "Praha",
     "street": "Piletická"
    },
    {
     "city": "Brno",
     "street": "Slunečná"
    },
    {
     "city": "Ostrava",
     "street": "Smetanovo nábřeží"
    },
    {
     "city": "Plzeň",
     "street": "Smiřická"
    },
    {
     "city": "Liberec",
     "street": "Smrková"
    },
    {
     "city": "Olomouc",
     "street": "Sokolovská"
    },
    {
     "city": "České Budějovice",
     "street": "Sokolská"
    },
    {
     "city": "Hradec Králové",
     "street": "Souběžná"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Soukenická"
    },
    {
     "city": "Pardubice",
     "street": "Sovova"
    },
    {
     "city": "Zlín",
     "street": "Spojovací"
    },
    {
     "city": "Havířov",
     "street": "Sportovní"
    },
    {
     "city": "Kladno",
     "street": "Spořilovská"
    },
    {
     "city": "Most",
     "street": "Srdínkova"
    },
    {
     "city": "Opava",
     "street": "Stará Polní"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Stavební"
    },
    {
     "city": "Jihlava",
     "street": "Stěžerská"
    },
    {
     "city": "Karviná",
     "street": "Střední"
    },
    {
     "city": "Teplice",
     "street": "Střelecká"
    },
    {
     "city": "Děčín",
     "street": "Stříbrná"
    },
    {
     "city": "Praha",
     "street": "Stříbrná náves"
    },
    {
     "city": "Brno",
     "street": "Stříbrný potok"
    },
    {
     "city": "Ostrava",
     "street": "Suchého"
    },
    {
     "city": "Plzeň",
     "street": "Sukova"
    },
    {
     "city": "Liberec",
     "street": "Sukovy sady"
    },
    {
     "city": "Olomouc",
     "street": "Sušilova"
    },
    {
     "city": "České Budějovice",
     "street": "Svatojánská"
    },
    {
     "city": "Hradec Králové",
     "street": "Svatováclavské náměstí"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Svinarská"
    },
    {
     "city": "Pardubice",
     "street": "Svitavská"
    },
    {
     "city": "Zlín",
     "street": "U Jednoty"
    },
    {
     "city": "Havířov",
     "street": "U Kavalíru"
    },
    {
     "city": "Kladno",
     "street": "U Koruny"
    },
    {
     "city": "Most",
     "street": "U Koše"
    },
    {
     "city": "Opava",
     "street": "U Kovárny"
    },
    {
     "city": "Frýdek-Místek",
     "street": "U Kulturního domu"
    },
    {
     "city": "Jihlava",
     "street": "U Labe"
    },
    {
     "city": "Karviná",
     "street": "U Lesíka"
    },
    {
     "city": "Teplice",
     "street": "Ulrichovo náměstí"
    },
    {
     "city": "Děčín",
     "street": "U Melounky"
    },
    {
     "city": "Praha",
     "street": "U Mlýna"
    },
    {
     "city": "Brno",
     "street": "U Mostku"
    },
    {
     "city": "Ostrava",
     "street": "U Myslivny"
    },
    {
     "city": "Plzeň",
     "street": "U Náhona"
    },
    {
     "city": "Liberec",
     "street": "U Náhonu"
    },
    {
     "city": "Olomouc",
     "street": "U Parku"
    },
    {
     "city": "České Budějovice",
     "street": "U Pastvišť"
    },
    {
     "city": "Hradec Králové",
     "street": "U Potoka"
    },
    {
     "city": "Ústí nad Labem",
     "street": "U Plováren"
    },
    {
     "city": "Pardubice",
     "street": "Úprkova"
    },
    {
     "city": "Zlín",
     "street": "Urxova"
    },
    {
     "city": "Havířov",
     "street": "U Sokola"
    },
    {
     "city": "Kladno",
     "street": "U Soudu"
    },
    {
     "city": "Most",
     "street": "U Střelnice"
    },
    {
     "city": "Opava",
     "street": "U Studánky"
    },
    {
     "city": "Frýdek-Místek",
     "street": "U Svodnice"
    },
    {
     "city": "Jihlava",
     "street": "U Trati"
    },
    {
     "city": "Karviná",
     "street": "U Vody"
    },
    {
     "city": "Teplice",
     "street": "Uzavřená"
    },
    {
     "city": "Děčín",
     "street": "Úzká"
    },
    {
     "city": "Praha",
     "street": "U Zvoničky"
    },
    {
     "city": "Brno",
     "street": "Vavákova"
    },
    {
     "city": "Ostrava",
     "street": "Vážní"
    },
    {
     "city": "Plzeň",
     "street": "V Domkách"
    },
    {
     "city": "Liberec",
     "street": "Velehradská"
    },
    {
     "city": "Olomouc",
     "street": "Velká"
    },
    {
     "city": "České Budějovice",
     "street": "Velké náměstí"
    },
    {
     "city": "Hradec Králové",
     "street": "Ve Stromovce"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Ve Svahu"
    },
    {
     "city": "Pardubice",
     "street": "Veverkova"
    },
    {
     "city": "Zlín",
     "street": "Věkošská"
    },
    {
     "city": "Havířov",
     "street": "Větrná"
    },
    {
     "city": "Kladno",
     "street": "Vilová"
    },
    {
     "city": "Most",
     "street": "Viničná"
    },
    {
     "city": "Opava",
     "street": "Višňová"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Víta Nejedlého"
    },
    {
     "city": "Jihlava",
     "street": "V Končinách"
    },
    {
     "city": "Karviná",
     "street": "V Kopečku"
    },
    {
     "city": "Teplice",
     "street": "V Koutech"
    },
    {
     "city": "Děčín",
     "street": "Vlčkovická"
    },
    {
     "city": "Praha",
     "street": "V Lipkách"
    },
    {
     "city": "Brno",
     "street": "V Lukách"
    },
    {
     "city": "Ostrava",
     "street": "V Mlejnku"
    },
    {
     "city": "Plzeň",
     "street": "Voborníkova"
    },
    {
     "city": "Liberec",
     "street": "Vocelova"
    },
    {
     "city": "Olomouc",
     "street": "Vonešovy sady"
    },
    {
     "city": "České Budějovice",
     "street": "V Poli"
    },
    {
     "city": "Hradec Králové",
     "street": "Vrázova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Vrbová"
    },
    {
     "city": "Pardubice",
     "street": "Vrchlického"
    },
    {
     "city": "Zlín",
     "street": "Vřesová"
    },
    {
     "city": "Havířov",
     "street": "Všehrdova"
    },
    {
     "city": "Kladno",
     "street": "V Tůních"
    },
    {
     "city": "Most",
     "street": "Vydrova"
    },
    {
     "city": "Opava",
     "street": "Východní"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Výrobní"
    },
    {
     "city": "Jihlava",
     "street": "Vysocká"
    },
    {
     "city": "Karviná",
     "street": "Wintrova"
    },
    {
     "city": "Teplice",
     "street": "Wolkerova"
    },
    {
     "city": "Děčín",
     "street": "Wonkova"
    },
    {
     "city": "Praha",
     "street": "Zadní"
    },
    {
     "city": "Brno",
     "street": "Zahrádkářská"
    },
    {
     "city": "Ostrava",
     "street": "Zahrádkářská osada Bohdanečská"
    },
    {
     "city": "Plzeň",
     "street": "Zahrádkářská osada Dolíky"
    },
    {
     "city": "Liberec",
     "street": "Zahrádkářská osada Hradečan"
    },
    {
     "city": "Olomouc",
     "street": "Zahrádkářská osada Mír"
    },
    {
     "city": "České Budějovice",
     "street": "Zahrádkářská osada Polabí"
    },
    {
     "city": "Hradec Králové",
     "street": "Zahrádkářská osada Slatina"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Zahrádkářská osada Třešňovka"
    },
    {
     "city": "Pardubice",
     "street": "Zahrádkářská osada U Labe"
    },
    {
     "city": "Zlín",
     "street": "Zahrádkářská osada Věkoše"
    },
    {
     "city": "Havířov",
     "street": "Zahrádkářská osada Zlatá růže"
    },
    {
     "city": "Kladno",
     "street": "Zahrádkářská osada ZVU"
    },
    {
     "city": "Most",
     "street": "Zahradní"
    },
    {
     "city": "Opava",
     "street": "Zahradnická"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Za Hřbitovem"
    },
    {
     "city": "Jihlava",
     "street": "Za Humny"
    },
    {
     "city": "Karviná",
     "street": "Za Jízdárnou"
    },
    {
     "city": "Teplice",
     "street": "Za Kostelem"
    },
    {
     "city": "Děčín",
     "street": "Zákrejsova"
    },
    {
     "city": "Praha",
     "street": "Za Lípou"
    },
    {
     "city": "Brno",
     "street": "Zalomená"
    },
    {
     "city": "Ostrava",
     "street": "Zámeček"
    },
    {
     "city": "Plzeň",
     "street": "Zamenhofova"
    },
    {
     "city": "Liberec",
     "street": "Zámostí"
    },
    {
     "city": "Olomouc",
     "street": "Za Poštou"
    },
    {
     "city": "České Budějovice",
     "street": "Za Škodovkou"
    },
    {
     "city": "Hradec Králové",
     "street": "Za Školou"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Za Veterinou"
    },
    {
     "city": "Pardubice",
     "street": "Za Zelárnou"
    },
    {
     "city": "Zlín",
     "street": "Zborovská"
    },
    {
     "city": "Havířov",
     "street": "Zdeňka Wirtha"
    },
    {
     "city": "Kladno",
     "street": "Zelená"
    },
    {
     "city": "Most",
     "street": "Zemědělská"
    },
    {
     "city": "Opava",
     "street": "Zeyerova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Zieglerova"
    },
    {
     "city": "Jihlava",
     "street": "Želivského"
    },
    {
     "city": "Karviná",
     "street": "Žitná"
    },
    {
     "city": "Teplice",
     "street": "Žižkovy sady"
    },
    {
     "city": "Praha",
     "street": "Adolfa Doležala"
    },
    {
     "city": "Brno",
     "street": "Akademika Bedrny"
    },
    {
     "city": "Ostrava",
     "street": "Akademika Heyrovského"
    },
    {
     "city": "Plzeň",
     "street": "Akátová"
    },
    {
     "city": "Liberec",
     "street": "Albertova"
    },
    {
     "city": "Olomouc",
     "street": "A. Malé"
    },
    {
     "city": "České Budějovice",
     "street": "Ambrožova"
    },
    {
     "city": "Hradec Králové",
     "street": "Anenské náměstí"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Antala Staška"
    },
    {
     "city": "Pardubice",
     "street": "Antonína Dvořáka"
    },
    {
     "city": "Zlín",
     "street": "Antonína Petrofa"
    },
    {
     "city": "Havířov",
     "street": "Baarova"
    },
    {
     "city": "Kladno",
     "street": "Balbínova"
    },
    {
     "city": "Most",
     "street": "Banskobystrická"
    },
    {
     "city": "Opava",
     "street": "Baťkovo náměstí"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Bekova"
    },
    {
     "city": "Jihlava",
     "street": "Bělečská"
    },
    {
     "city": "Karviná",
     "street": "Bendlova"
    },
    {
     "city": "Teplice",
     "street": "Bezejmenná"
    },
    {
     "city": "Děčín",
     "street": "Bezová"
    },
    {
     "city": "Praha",
     "street": "Bezručova"
    },
    {
     "city": "Brno",
     "street": "Bidlova"
    },
    {
     "city": "Ostrava",
     "street": "Bieblova"
    },
    {
     "city": "Plzeň",
     "street": "Blahoslavova"
    },
    {
     "city": "Liberec",
     "street": "Blažíčkovo náměstí"
    },
    {
     "city": "Olomouc",
     "street": "Blodkova"
    },
    {
     "city": "České Budějovice",
     "street": "Boční"
    },
    {
     "city": "Hradec Králové",
     "street": "Bohdanečská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Bohuslava Martinů"
    },
    {
     "city": "Pardubice",
     "street": "Boleslavova"
    },
    {
     "city": "Zlín",
     "street": "Bono publico"
    },
    {
     "city": "Havířov",
     "street": "Borová"
    },
    {
     "city": "Kladno",
     "street": "Borovinka"
    },
    {
     "city": "Most",
     "street": "Botanická"
    },
    {
     "city": "Opava",
     "street": "Bozděchova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Boženy Němcové"
    },
    {
     "city": "Jihlava",
     "street": "Brandlova"
    },
    {
     "city": "Karviná",
     "street": "Bratří Čapků"
    },
    {
     "city": "Teplice",
     "street": "Bratří Štefanů"
    },
    {
     "city": "Děčín",
     "street": "Brněnská"
    },
    {
     "city": "Praha",
     "street": "Brožíkova"
    },
    {
     "city": "Brno",
     "street": "Břetislavova"
    },
    {
     "city": "Ostrava",
     "street": "Březhradská"
    },
    {
     "city": "Plzeň",
     "street": "Březová"
    },
    {
     "city": "Liberec",
     "street": "Břidličná"
    },
    {
     "city": "Olomouc",
     "street": "Buková"
    },
    {
     "city": "České Budějovice",
     "street": "Buzulucká"
    },
    {
     "city": "Hradec Králové",
     "street": "Cejpova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Cihlářská"
    },
    {
     "city": "Pardubice",
     "street": "Cimlerova"
    },
    {
     "city": "Zlín",
     "street": "Citrusová"
    },
    {
     "city": "Havířov",
     "street": "Collinova"
    },
    {
     "city": "Kladno",
     "street": "Čajkovského"
    },
    {
     "city": "Most",
     "street": "Čechova"
    },
    {
     "city": "Opava",
     "street": "Čelakovského"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Černilovská"
    },
    {
     "city": "Jihlava",
     "street": "Červeného"
    },
    {
     "city": "Karviná",
     "street": "Červený Dvůr"
    },
    {
     "city": "Teplice",
     "street": "Československé armády"
    },
    {
     "city": "Děčín",
     "street": "Dědkova"
    },
    {
     "city": "Praha",
     "street": "Dělnická"
    },
    {
     "city": "Brno",
     "street": "Denisovo náměstí"
    },
    {
     "city": "Ostrava",
     "street": "Divecká"
    },
    {
     "city": "Plzeň",
     "street": "Divišova"
    },
    {
     "city": "Liberec",
     "street": "Dlouhá"
    },
    {
     "city": "Olomouc",
     "street": "Dobroslavova"
    },
    {
     "city": "České Budějovice",
     "street": "Dobrovského"
    },
    {
     "city": "Hradec Králové",
     "street": "Dolní"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Do Luh"
    },
    {
     "city": "Pardubice",
     "street": "Domečkova"
    },
    {
     "city": "Zlín",
     "street": "Drahoňovského"
    },
    {
     "city": "Havířov",
     "street": "Drtinova"
    },
    {
     "city": "Kladno",
     "street": "Družstevní"
    },
    {
     "city": "Most",
     "street": "Dřevařská"
    },
    {
     "city": "Opava",
     "street": "Dubina"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Dubinská"
    },
    {
     "city": "Jihlava",
     "street": "Dubová"
    },
    {
     "city": "Karviná",
     "street": "Dukelská třída"
    },
    {
     "city": "Teplice",
     "street": "Durychova"
    },
    {
     "city": "Děčín",
     "street": "Dvorská"
    },
    {
     "city": "Praha",
     "street": "Dykova"
    },
    {
     "city": "Brno",
     "street": "Eliščino nábřeží"
    },
    {
     "city": "Ostrava",
     "street": "Emy Destinnové"
    },
    {
     "city": "Plzeň",
     "street": "Erbenova"
    },
    {
     "city": "Liberec",
     "street": "Exnárova"
    },
    {
     "city": "Olomouc",
     "street": "Farářství"
    },
    {
     "city": "České Budějovice",
     "street": "Fibichova"
    },
    {
     "city": "Hradec Králové",
     "street": "Foerstrova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Formánkova"
    },
    {
     "city": "Pardubice",
     "street": "Fráni Šrámka"
    },
    {
     "city": "Zlín",
     "street": "Františka Halase"
    },
    {
     "city": "Havířov",
     "street": "Františka Komárka"
    },
    {
     "city": "Kladno",
     "street": "Františka Šubrta"
    },
    {
     "city": "Most",
     "street": "Františka Žaloudka"
    },
    {
     "city": "Opava",
     "street": "Franušova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Fričova"
    },
    {
     "city": "Jihlava",
     "street": "Fr. Tichého"
    },
    {
     "city": "Karviná",
     "street": "Fučíkova"
    },
    {
     "city": "Teplice",
     "street": "Gagarinova"
    },
    {
     "city": "Děčín",
     "street": "Gebauerova"
    },
    {
     "city": "Praha",
     "street": "Gočárova třída"
    },
    {
     "city": "Brno",
     "street": "Gogolova"
    },
    {
     "city": "Ostrava",
     "street": "Gollova"
    },
    {
     "city": "Plzeň",
     "street": "Grégrovo náměstí"
    },
    {
     "city": "Liberec",
     "street": "Gruzínská"
    },
    {
     "city": "Olomouc",
     "street": "Habrmanova"
    },
    {
     "city": "České Budějovice",
     "street": "Hálkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Hannova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Haškova"
    },
    {
     "city": "Pardubice",
     "street": "Havlíčkova"
    },
    {
     "city": "Zlín",
     "street": "Herbenova"
    },
    {
     "city": "Havířov",
     "street": "Heřmanova"
    },
    {
     "city": "Kladno",
     "street": "Hlavní"
    },
    {
     "city": "Most",
     "street": "Hoděšovická"
    },
    {
     "city": "Opava",
     "street": "Holečkova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Holická"
    },
    {
     "city": "Jihlava",
     "street": "Holubova"
    },
    {
     "city": "Karviná",
     "street": "Honkova"
    },
    {
     "city": "Teplice",
     "street": "Horní"
    },
    {
     "city": "Děčín",
     "street": "Horova"
    },
    {
     "city": "Praha",
     "street": "Hořická"
    },
    {
     "city": "Brno",
     "street": "Hostivítova"
    },
    {
     "city": "Ostrava",
     "street": "Hradební"
    },
    {
     "city": "Plzeň",
     "street": "Hradecká"
    },
    {
     "city": "Liberec",
     "street": "Hradečnice"
    },
    {
     "city": "Olomouc",
     "street": "Hrdého"
    },
    {
     "city": "České Budějovice",
     "street": "Hronkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Hrubínova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Husitská"
    },
    {
     "city": "Pardubice",
     "street": "Husova"
    },
    {
     "city": "Zlín",
     "street": "Chaloupky"
    },
    {
     "city": "Havířov",
     "street": "Chelčického"
    },
    {
     "city": "Kladno",
     "street": "Chmelova"
    },
    {
     "city": "Most",
     "street": "Ignáta Herrmanna"
    },
    {
     "city": "Opava",
     "street": "Ivana Olbrachta"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Jabloňová"
    },
    {
     "city": "Jihlava",
     "street": "Jalovcová"
    },
    {
     "city": "Karviná",
     "street": "Jana Černého"
    },
    {
     "city": "Teplice",
     "street": "Jana Koziny"
    },
    {
     "city": "Děčín",
     "street": "Jana Krušinky"
    },
    {
     "city": "Praha",
     "street": "Jana Masaryka"
    },
    {
     "city": "Brno",
     "street": "Janáčkova"
    },
    {
     "city": "Ostrava",
     "street": "Jandova"
    },
    {
     "city": "Plzeň",
     "street": "Jánošíkova"
    },
    {
     "city": "Liberec",
     "street": "Jaroměřská"
    },
    {
     "city": "Olomouc",
     "street": "Jarošova"
    },
    {
     "city": "České Budějovice",
     "street": "Jasanová"
    },
    {
     "city": "Hradec Králové",
     "street": "Jasmínová"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Jatečný plácek"
    },
    {
     "city": "Pardubice",
     "street": "Javorová"
    },
    {
     "city": "Zlín",
     "street": "Ječná"
    },
    {
     "city": "Havířov",
     "street": "Jedlová"
    },
    {
     "city": "Kladno",
     "street": "Jeronýmova"
    },
    {
     "city": "Most",
     "street": "Jičínská"
    },
    {
     "city": "Opava",
     "street": "Jilmová"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Jindrova"
    },
    {
     "city": "Jihlava",
     "street": "Jiráskova"
    },
    {
     "city": "Karviná",
     "street": "Jiráskovo náměstí"
    },
    {
     "city": "Teplice",
     "street": "Jiráskovy sady"
    },
    {
     "city": "Děčín",
     "street": "Jiřího Purkyně"
    },
    {
     "city": "Praha",
     "street": "Jižní"
    },
    {
     "city": "Brno",
     "street": "Jungmannova"
    },
    {
     "city": "Ostrava",
     "street": "Kalendova"
    },
    {
     "city": "Plzeň",
     "street": "K Aleji"
    },
    {
     "city": "Liberec",
     "street": "Kampanova"
    },
    {
     "city": "Olomouc",
     "street": "Kampelíkova"
    },
    {
     "city": "České Budějovice",
     "street": "Kaplířova"
    },
    {
     "city": "Hradec Králové",
     "street": "Karla Čapka"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Karla Hynka Máchy"
    },
    {
     "city": "Pardubice",
     "street": "Karla Tomana"
    },
    {
     "city": "Zlín",
     "street": "Karoliny Světlé"
    },
    {
     "city": "Havířov",
     "street": "Kaštanová"
    },
    {
     "city": "Kladno",
     "street": "Kavčí plácek"
    },
    {
     "city": "Most",
     "street": "K Biřičce"
    },
    {
     "city": "Opava",
     "street": "K Borku"
    },
    {
     "city": "Frýdek-Místek",
     "street": "K Břízkám"
    },
    {
     "city": "Jihlava",
     "street": "K Cikánu"
    },
    {
     "city": "Karviná",
     "street": "K Dehetníku"
    },
    {
     "city": "Teplice",
     "street": "K Dolíkám"
    },
    {
     "city": "Děčín",
     "street": "Kejzlarova"
    },
    {
     "city": "Praha",
     "street": "Ke Kopaninám"
    },
    {
     "city": "Brno",
     "street": "Ke Křížku"
    },
    {
     "city": "Ostrava",
     "street": "Ke Splavu"
    },
    {
     "city": "Plzeň",
     "street": "K Hvězdárně"
    },
    {
     "city": "Liberec",
     "street": "K Chatám"
    },
    {
     "city": "Olomouc",
     "street": "K Labi"
    },
    {
     "city": "České Budějovice",
     "street": "Klacovská"
    },
    {
     "city": "Hradec Králové",
     "street": "Kladská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Klášterského"
    },
    {
     "city": "Pardubice",
     "street": "Kleinerových"
    },
    {
     "city": "Zlín",
     "street": "K Lesu"
    },
    {
     "city": "Havířov",
     "street": "Klicperova"
    },
    {
     "city": "Kladno",
     "street": "Klidná"
    },
    {
     "city": "Most",
     "street": "Klumparova"
    },
    {
     "city": "Opava",
     "street": "K Metelce"
    },
    {
     "city": "Frýdek-Místek",
     "street": "K Meteoru"
    },
    {
     "city": "Jihlava",
     "street": "Kmochova"
    },
    {
     "city": "Karviná",
     "street": "Kociánovice"
    },
    {
     "city": "Teplice",
     "street": "Kochanova"
    },
    {
     "city": "Děčín",
     "street": "Kollárova"
    },
    {
     "city": "Praha",
     "street": "Komenského"
    },
    {
     "city": "Brno",
     "street": "Kopretinová"
    },
    {
     "city": "Ostrava",
     "street": "Kotěrova"
    },
    {
     "city": "Plzeň",
     "street": "Kotrčova"
    },
    {
     "city": "Liberec",
     "street": "Koutníkova"
    },
    {
     "city": "Olomouc",
     "street": "Kovová"
    },
    {
     "city": "České Budějovice",
     "street": "Koželužská"
    },
    {
     "city": "Hradec Králové",
     "street": "K Orlici"
    },
    {
     "city": "Ústí nad Labem",
     "street": "K Osadě"
    },
    {
     "city": "Pardubice",
     "street": "K Polabinám"
    },
    {
     "city": "Zlín",
     "street": "K Potoku"
    },
    {
     "city": "Havířov",
     "street": "K Radaru"
    },
    {
     "city": "Kladno",
     "street": "Kpt. Fechtnera"
    },
    {
     "city": "Most",
     "street": "Krapkova"
    },
    {
     "city": "Opava",
     "street": "Krátká"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Krunertova"
    },
    {
     "city": "Jihlava",
     "street": "K Rybníku"
    },
    {
     "city": "Karviná",
     "street": "Křivá"
    },
    {
     "city": "Teplice",
     "street": "Křižíkova"
    },
    {
     "city": "Děčín",
     "street": "Křížkovského"
    },
    {
     "city": "Praha",
     "street": "K Sokolovně"
    },
    {
     "city": "Brno",
     "street": "Kubcova"
    },
    {
     "city": "Ostrava",
     "street": "Kubelíkova"
    },
    {
     "city": "Plzeň",
     "street": "Kubištova"
    },
    {
     "city": "Liberec",
     "street": "Kubištovy sady"
    },
    {
     "city": "Olomouc",
     "street": "Kudrnova"
    },
    {
     "city": "České Budějovice",
     "street": "Kuklenská"
    },
    {
     "city": "Hradec Králové",
     "street": "Kutnohorská"
    },
    {
     "city": "Ústí nad Labem",
     "street": "K Úvrati"
    },
    {
     "city": "Pardubice",
     "street": "Květná"
    },
    {
     "city": "Zlín",
     "street": "Kydlinovská"
    },
    {
     "city": "Havířov",
     "street": "Kyjevská"
    },
    {
     "city": "Kladno",
     "street": "Kyjovská"
    },
    {
     "city": "Most",
     "street": "K Zastávce"
    },
    {
     "city": "Opava",
     "street": "Labská kotlina"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Labská louka"
    },
    {
     "city": "Jihlava",
     "street": "Labská vodárna"
    },
    {
     "city": "Karviná",
     "street": "Labská zahrada"
    },
    {
     "city": "Teplice",
     "street": "Ladova"
    },
    {
     "city": "Děčín",
     "street": "Leknínová"
    },
    {
     "city": "Praha",
     "street": "Lesní"
    },
    {
     "city": "Brno",
     "street": "Letců"
    },
    {
     "city": "Ostrava",
     "street": "Letiště"
    },
    {
     "city": "Plzeň",
     "street": "Ležáky"
    },
    {
     "city": "Liberec",
     "street": "Lhotecká"
    },
    {
     "city": "Olomouc",
     "street": "Libišanská"
    },
    {
     "city": "České Budějovice",
     "street": "Librantická"
    },
    {
     "city": "Hradec Králové",
     "street": "Lidická"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Lipová"
    },
    {
     "city": "Pardubice",
     "street": "Líznerova"
    },
    {
     "city": "Zlín",
     "street": "Lomená"
    },
    {
     "city": "Havířov",
     "street": "Luční"
    },
    {
     "city": "Kladno",
     "street": "Ludovíta Štúra"
    },
    {
     "city": "Most",
     "street": "Lužická"
    },
    {
     "city": "Opava",
     "street": "Machkova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Machovcova"
    },
    {
     "city": "Jihlava",
     "street": "Malá"
    },
    {
     "city": "Karviná",
     "street": "Malé náměstí"
    },
    {
     "city": "Teplice",
     "street": "Malinová"
    },
    {
     "city": "Děčín",
     "street": "Malšovická"
    },
    {
     "city": "Praha",
     "street": "M. D. Rettigové"
    },
    {
     "city": "Brno",
     "street": "Mandysova"
    },
    {
     "city": "Ostrava",
     "street": "Mánesova"
    },
    {
     "city": "Plzeň",
     "street": "Manželů Zemánkových"
    },
    {
     "city": "Liberec",
     "street": "Marie Pujmanové"
    },
    {
     "city": "Olomouc",
     "street": "Markova"
    },
    {
     "city": "České Budějovice",
     "street": "Markovice"
    },
    {
     "city": "Hradec Králové",
     "street": "Markovická"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Mařákova"
    },
    {
     "city": "Pardubice",
     "street": "Masarykovo náměstí"
    },
    {
     "city": "Zlín",
     "street": "Maxe Malého"
    },
    {
     "city": "Havířov",
     "street": "Medkova"
    },
    {
     "city": "Kladno",
     "street": "Meruňková"
    },
    {
     "city": "Most",
     "street": "Mikoláše Alše"
    },
    {
     "city": "Opava",
     "street": "Milady Horákové"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Miroslava Hájka"
    },
    {
     "city": "Jihlava",
     "street": "Miřiovského"
    },
    {
     "city": "Karviná",
     "street": "Mládeže"
    },
    {
     "city": "Teplice",
     "street": "Mlýnská"
    },
    {
     "city": "Děčín",
     "street": "M. Majerové"
    },
    {
     "city": "Praha",
     "street": "Modřínová"
    },
    {
     "city": "Brno",
     "street": "Mokrá"
    },
    {
     "city": "Ostrava",
     "street": "Moravská"
    },
    {
     "city": "Plzeň",
     "street": "Moravský most"
    },
    {
     "city": "Liberec",
     "street": "most Plukovníka Šrámka"
    },
    {
     "city": "Olomouc",
     "street": "Mostecká"
    },
    {
     "city": "České Budějovice",
     "street": "Mrštíkova"
    },
    {
     "city": "Hradec Králové",
     "street": "Mužíkova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Myslbekova"
    },
    {
     "city": "Pardubice",
     "street": "Myslivečkova"
    },
    {
     "city": "Zlín",
     "street": "Mýtská"
    },
    {
     "city": "Havířov",
     "street": "Na Barvínku"
    },
    {
     "city": "Kladno",
     "street": "Na Biřičce"
    },
    {
     "city": "Most",
     "street": "Na Brně"
    },
    {
     "city": "Opava",
     "street": "Na Břehách"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Nábřeží U Přívozu"
    },
    {
     "city": "Jihlava",
     "street": "Na Cvičišti"
    },
    {
     "city": "Karviná",
     "street": "Nad Oborou"
    },
    {
     "city": "Teplice",
     "street": "Na Drahách"
    },
    {
     "city": "Děčín",
     "street": "Na Drážkách"
    },
    {
     "city": "Praha",
     "street": "Náchodská"
    },
    {
     "city": "Brno",
     "street": "Nádražní"
    },
    {
     "city": "Ostrava",
     "street": "Nad Rozárkou"
    },
    {
     "city": "Plzeň",
     "street": "Nad Rybníky"
    },
    {
     "city": "Liberec",
     "street": "Na Dřevěnce"
    },
    {
     "city": "Olomouc",
     "street": "Na Dubech"
    },
    {
     "city": "České Budějovice",
     "street": "Na Důchodě"
    },
    {
     "city": "Hradec Králové",
     "street": "Na Sadech"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Náhon"
    },
    {
     "city": "Pardubice",
     "street": "Na Hradě"
    },
    {
     "city": "Zlín",
     "street": "Na Hrázce"
    },
    {
     "city": "Havířov",
     "street": "Na Humpolci"
    },
    {
     "city": "Kladno",
     "street": "Na Jezírkách"
    },
    {
     "city": "Most",
     "street": "Na Konečné"
    },
    {
     "city": "Opava",
     "street": "Na Kopečku"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Na Kotli"
    },
    {
     "city": "Jihlava",
     "street": "Na Kopci"
    },
    {
     "city": "Karviná",
     "street": "Na Kropáčce"
    },
    {
     "city": "Teplice",
     "street": "Nálepkova"
    },
    {
     "city": "Děčín",
     "street": "Na Letné"
    },
    {
     "city": "Praha",
     "street": "Na Lučinách"
    },
    {
     "city": "Brno",
     "street": "náměstí 28. října"
    },
    {
     "city": "Ostrava",
     "street": "náměstí E. F. Buriana"
    },
    {
     "city": "Plzeň",
     "street": "náměstí Jana Pavla II."
    },
    {
     "city": "Liberec",
     "street": "náměstí Osvoboditelů"
    },
    {
     "city": "Olomouc",
     "street": "náměstí Svobody"
    },
    {
     "city": "České Budějovice",
     "street": "náměstí Václava Havla"
    },
    {
     "city": "Hradec Králové",
     "street": "náměstí 5. května"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Na Mlejnku"
    },
    {
     "city": "Pardubice",
     "street": "Na Občinách"
    },
    {
     "city": "Zlín",
     "street": "Na Ohradě"
    },
    {
     "city": "Havířov",
     "street": "Na Okrouhlíku"
    },
    {
     "city": "Kladno",
     "street": "Na Opuce"
    },
    {
     "city": "Most",
     "street": "Na Paloukách"
    },
    {
     "city": "Opava",
     "street": "Na Pastvinách"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Na Pískách"
    },
    {
     "city": "Jihlava",
     "street": "Na Plachtě"
    },
    {
     "city": "Karviná",
     "street": "Na Potoce"
    },
    {
     "city": "Teplice",
     "street": "Národních mučedníků"
    },
    {
     "city": "Děčín",
     "street": "Na Rozhraní"
    },
    {
     "city": "Praha",
     "street": "Na Rybárně"
    },
    {
     "city": "Brno",
     "street": "Na Rybníce"
    },
    {
     "city": "Ostrava",
     "street": "Na Sádkách"
    },
    {
     "city": "Plzeň",
     "street": "Na Stávku"
    },
    {
     "city": "Liberec",
     "street": "Na Stružce"
    },
    {
     "city": "Olomouc",
     "street": "Na Střezině"
    },
    {
     "city": "České Budějovice",
     "street": "Na Úvoze"
    },
    {
     "city": "Hradec Králové",
     "street": "Na Valince"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Na Valše"
    },
    {
     "city": "Pardubice",
     "street": "Na Vinicích"
    },
    {
     "city": "Zlín",
     "street": "Na Výsluní"
    },
    {
     "city": "Havířov",
     "street": "Na Zahrádkách"
    },
    {
     "city": "Kladno",
     "street": "Na Zálesí"
    },
    {
     "city": "Most",
     "street": "Nemocnice"
    },
    {
     "city": "Opava",
     "street": "Nerudova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Oldřichova"
    },
    {
     "city": "Jihlava",
     "street": "Olšová"
    },
    {
     "city": "Karviná",
     "street": "Opatovická"
    },
    {
     "city": "Teplice",
     "street": "Opletalova"
    },
    {
     "city": "Děčín",
     "street": "Orebská"
    },
    {
     "city": "Praha",
     "street": "Orlická"
    },
    {
     "city": "Brno",
     "street": "Orlické nábřeží"
    },
    {
     "city": "Ostrava",
     "street": "Orlický most"
    },
    {
     "city": "Plzeň",
     "street": "Orličan"
    },
    {
     "city": "Liberec",
     "street": "Ořechová"
    },
    {
     "city": "Olomouc",
     "street": "Osada vycházejícího slunce"
    },
    {
     "city": "České Budějovice",
     "street": "Osiková"
    },
    {
     "city": "Hradec Králové",
     "street": "Oskara Nedbala"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Ostrov"
    },
    {
     "city": "Pardubice",
     "street": "Ostrovní"
    },
    {
     "city": "Zlín",
     "street": "Ostružinová"
    },
    {
     "city": "Havířov",
     "street": "Otokara Březiny"
    },
    {
     "city": "Kladno",
     "street": "Ovocnářská"
    },
    {
     "city": "Most",
     "street": "Parlament"
    },
    {
     "city": "Opava",
     "street": "Partyzánská"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Pavla Hanuše"
    },
    {
     "city": "Jihlava",
     "street": "Pekařova"
    },
    {
     "city": "Karviná",
     "street": "Pelclova"
    },
    {
     "city": "Teplice",
     "street": "Pešinova"
    },
    {
     "city": "Děčín",
     "street": "Petra Jilemnického"
    },
    {
     "city": "Praha",
     "street": "Piletická"
    },
    {
     "city": "Brno",
     "street": "Slunečná"
    },
    {
     "city": "Ostrava",
     "street": "Smetanovo nábřeží"
    },
    {
     "city": "Plzeň",
     "street": "Smiřická"
    },
    {
     "city": "Liberec",
     "street": "Smrková"
    },
    {
     "city": "Olomouc",
     "street": "Sokolovská"
    },
    {
     "city": "České Budějovice",
     "street": "Sokolská"
    },
    {
     "city": "Hradec Králové",
     "street": "Souběžná"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Soukenická"
    },
    {
     "city": "Pardubice",
     "street": "Sovova"
    },
    {
     "city": "Zlín",
     "street": "Spojovací"
    },
    {
     "city": "Havířov",
     "street": "Sportovní"
    },
    {
     "city": "Kladno",
     "street": "Spořilovská"
    },
    {
     "city": "Most",
     "street": "Srdínkova"
    },
    {
     "city": "Opava",
     "street": "Stará Polní"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Stavební"
    },
    {
     "city": "Jihlava",
     "street": "Stěžerská"
    },
    {
     "city": "Karviná",
     "street": "Střední"
    },
    {
     "city": "Teplice",
     "street": "Střelecká"
    },
    {
     "city": "Děčín",
     "street": "Stříbrná"
    },
    {
     "city": "Praha",
     "street": "Stříbrná náves"
    },
    {
     "city": "Brno",
     "street": "Stříbrný potok"
    },
    {
     "city": "Ostrava",
     "street": "Suchého"
    },
    {
     "city": "Plzeň",
     "street": "Sukova"
    },
    {
     "city": "Liberec",
     "street": "Sukovy sady"
    },
    {
     "city": "Olomouc",
     "street": "Sušilova"
    },
    {
     "city": "České Budějovice",
     "street": "Svatojánská"
    },
    {
     "city": "Hradec Králové",
     "street": "Svatováclavské náměstí"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Svinarská"
    },
    {
     "city": "Pardubice",
     "street": "Svitavská"
    },
    {
     "city": "Zlín",
     "street": "U Jednoty"
    },
    {
     "city": "Havířov",
     "street": "U Kavalíru"
    },
    {
     "city": "Kladno",
     "street": "U Koruny"
    },
    {
     "city": "Most",
     "street": "U Koše"
    },
    {
     "city": "Opava",
     "street": "U Kovárny"
    },
    {
     "city": "Frýdek-Místek",
     "street": "U Kulturního domu"
    },
    {
     "city": "Jihlava",
     "street": "U Labe"
    },
    {
     "city": "Karviná",
     "street": "U Lesíka"
    },
    {
     "city": "Teplice",
     "street": "Ulrichovo náměstí"
    },
    {
     "city": "Děčín",
     "street": "U Melounky"
    },
    {
     "city": "Praha",
     "street": "U Mlýna"
    },
    {
     "city": "Brno",
     "street": "U Mostku"
    },
    {
     "city": "Ostrava",
     "street": "U Myslivny"
    },
    {
     "city": "Plzeň",
     "street": "U Náhona"
    },
    {
     "city": "Liberec",
     "street": "U Náhonu"
    },
    {
     "city": "Olomouc",
     "street": "U Parku"
    },
    {
     "city": "České Budějovice",
     "street": "U Pastvišť"
    },
    {
     "city": "Hradec Králové",
     "street": "U Potoka"
    },
    {
     "city": "Ústí nad Labem",
     "street": "U Plováren"
    },
    {
     "city": "Pardubice",
     "street": "Úprkova"
    },
    {
     "city": "Zlín",
     "street": "Urxova"
    },
    {
     "city": "Havířov",
     "street": "U Sokola"
    },
    {
     "city": "Kladno",
     "street": "U Soudu"
    },
    {
     "city": "Most",
     "street": "U Střelnice"
    },
    {
     "city": "Opava",
     "street": "U Studánky"
    },
    {
     "city": "Frýdek-Místek",
     "street": "U Svodnice"
    },
    {
     "city": "Jihlava",
     "street": "U Trati"
    },
    {
     "city": "Karviná",
     "street": "U Vody"
    },
    {
     "city": "Teplice",
     "street": "Uzavřená"
    },
    {
     "city": "Děčín",
     "street": "Úzká"
    },
    {
     "city": "Praha",
     "street": "U Zvoničky"
    },
    {
     "city": "Brno",
     "street": "Vavákova"
    },
    {
     "city": "Ostrava",
     "street": "Vážní"
    },
    {
     "city": "Plzeň",
     "street": "V Domkách"
    },
    {
     "city": "Liberec",
     "street": "Velehradská"
    },
    {
     "city": "Olomouc",
     "street": "Velká"
    },
    {
     "city": "České Budějovice",
     "street": "Velké náměstí"
    },
    {
     "city": "Hradec Králové",
     "street": "Ve Stromovce"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Ve Svahu"
    },
    {
     "city": "Pardubice",
     "street": "Veverkova"
    },
    {
     "city": "Zlín",
     "street": "Věkošská"
    },
    {
     "city": "Havířov",
     "street": "Větrná"
    },
    {
     "city": "Kladno",
     "street": "Vilová"
    },
    {
     "city": "Most",
     "street": "Viničná"
    },
    {
     "city": "Opava",
     "street": "Višňová"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Víta Nejedlého"
    },
    {
     "city": "Jihlava",
     "street": "V Končinách"
    },
    {
     "city": "Karviná",
     "street": "V Kopečku"
    },
    {
     "city": "Teplice",
     "street": "V Koutech"
    },
    {
     "city": "Děčín",
     "street": "Vlčkovická"
    },
    {
     "city": "Praha",
     "street": "V Lipkách"
    },
    {
     "city": "Brno",
     "street": "V Lukách"
    },
    {
     "city": "Ostrava",
     "street": "V Mlejnku"
    },
    {
     "city": "Plzeň",
     "street": "Voborníkova"
    },
    {
     "city": "Liberec",
     "street": "Vocelova"
    },
    {
     "city": "Olomouc",
     "street": "Vonešovy sady"
    },
    {
     "city": "České Budějovice",
     "street": "V Poli"
    },
    {
     "city": "Hradec Králové",
     "street": "Vrázova"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Vrbová"
    },
    {
     "city": "Pardubice",
     "street": "Vrchlického"
    },
    {
     "city": "Zlín",
     "street": "Vřesová"
    },
    {
     "city": "Havířov",
     "street": "Všehrdova"
    },
    {
     "city": "Kladno",
     "street": "V Tůních"
    },
    {
     "city": "Most",
     "street": "Vydrova"
    },
    {
     "city": "Opava",
     "street": "Východní"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Výrobní"
    },
    {
     "city": "Jihlava",
     "street": "Vysocká"
    },
    {
     "city": "Karviná",
     "street": "Wintrova"
    },
    {
     "city": "Teplice",
     "street": "Wolkerova"
    },
    {
     "city": "Děčín",
     "street": "Wonkova"
    },
    {
     "city": "Praha",
     "street": "Zadní"
    },
    {
     "city": "Brno",
     "street": "Zahrádkářská"
    },
    {
     "city": "Ostrava",
     "street": "Zahrádkářská osada Bohdanečská"
    },
    {
     "city": "Plzeň",
     "street": "Zahrádkářská osada Dolíky"
    },
    {
     "city": "Liberec",
     "street": "Zahrádkářská osada Hradečan"
    },
    {
     "city": "Olomouc",
     "street": "Zahrádkářská osada Mír"
    },
    {
     "city": "České Budějovice",
     "street": "Zahrádkářská osada Polabí"
    },
    {
     "city": "Hradec Králové",
     "street": "Zahrádkářská osada Slatina"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Zahrádkářská osada Třešňovka"
    },
    {
     "city": "Pardubice",
     "street": "Zahrádkářská osada U Labe"
    },
    {
     "city": "Zlín",
     "street": "Zahrádkářská osada Věkoše"
    },
    {
     "city": "Havířov",
     "street": "Zahrádkářská osada Zlatá růže"
    },
    {
     "city": "Kladno",
     "street": "Zahrádkářská osada ZVU"
    },
    {
     "city": "Most",
     "street": "Zahradní"
    },
    {
     "city": "Opava",
     "street": "Zahradnická"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Za Hřbitovem"
    },
    {
     "city": "Jihlava",
     "street": "Za Humny"
    },
    {
     "city": "Karviná",
     "street": "Za Jízdárnou"
    },
    {
     "city": "Teplice",
     "street": "Za Kostelem"
    },
    {
     "city": "Děčín",
     "street": "Zákrejsova"
    },
    {
     "city": "Praha",
     "street": "Za Lípou"
    },
    {
     "city": "Brno",
     "street": "Zalomená"
    },
    {
     "city": "Ostrava",
     "street": "Zámeček"
    },
    {
     "city": "Plzeň",
     "street": "Zamenhofova"
    },
    {
     "city": "Liberec",
     "street": "Zámostí"
    },
    {
     "city": "Olomouc",
     "street": "Za Poštou"
    },
    {
     "city": "České Budějovice",
     "street": "Za Škodovkou"
    },
    {
     "city": "Hradec Králové",
     "street": "Za Školou"
    },
    {
     "city": "Ústí nad Labem",
     "street": "Za Veterinou"
    },
    {
     "city": "Pardubice",
     "street": "Za Zelárnou"
    },
    {
     "city": "Zlín",
     "street": "Zborovská"
    },
    {
     "city": "Havířov",
     "street": "Zdeňka Wirtha"
    },
    {
     "city": "Kladno",
     "street": "Zelená"
    },
    {
     "city": "Most",
     "street": "Zemědělská"
    },
    {
     "city": "Opava",
     "street": "Zeyerova"
    },
    {
     "city": "Frýdek-Místek",
     "street": "Zieglerova"
    },
    {
     "city": "Jihlava",
     "street": "Želivského"
    },
    {
     "city": "Karviná",
     "street": "Žitná"
    },
    {
     "city": "Teplice",
     "street": "Žižkovy sady"
    }
   ]`;

const streets = JSON.parse(jsonStreets);
const locations = []

streets.forEach(location => {
    locations.push({"city":location.city,
    "gpsLat":getRandomLatitude(),
    "gpsLon":getRandomLongtitude(),
    "street":location.street,
    "streetNumber":String(getRandomStreetNumber())})
});

const locationsId = db.location.insertMany(locations)
print("Inserted " + locations.length + " locations.")

function getRandomLatitude() {
    const min = -90;
    const max = 90;
    const precision = 10;
    
    const randomNum = Math.random() * (max - min) + min;
    const roundedNum = randomNum.toFixed(precision);
    
    return Number(roundedNum);
}

function getRandomLongtitude() {
    const min = -180;
    const max = 180;
    const precision = 10;
    
    const randomNum = Math.random() * (max - min) + min;
    const roundedNum = randomNum.toFixed(precision);
    
    return Number(roundedNum);
  }

  function getRandomStreetNumber() {
    const min = 1;
    const max = 1000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// -----------------------LOAD GARBAGECANS -----------------------
const garbageCans = []
const garbageTypes = ["Směsný", "Plasty", "Papír","Sklo","Kovy","Nebezpečný","Recyklovatelný","Bio"];
const insertedIds = Object.values(locationsId.insertedIds);

for (let i = 0; i < insertedIds.length; i++) {
  garbageCans.push({
          "garbageType": garbageTypes[Math.floor(Math.random() * garbageTypes.length)],
          "location": insertedIds[i],
          "volume": Math.floor(Math.random() * (991) + 10)
        })    
}

const garbageCansResult = db.garbageCan.insertMany(garbageCans)
const garbageCansIds = Object.values(garbageCansResult.insertedIds);
print("Inserted " + garbageCansIds.length + " GarbageCans.")

// -----------------------LOAD LANDFILLS -----------------------
const uniqueCities = db.location.distinct("city"); // get unique cities
const landfills = []
uniqueCities.forEach(city => {  
  landfills.push({    
    "location": db.location.findOne({ city: city })._id,
    "capacity" : Math.floor(Math.random() * (100000 - 10000)) + 10000,
    "operational" : Math.random() < 0.5,
    //"collectionsPerfomed" : null,
    "percentFilled" : Math.floor(Math.random() * (100))
  })  

})
const landfillsResult = db.landfill.insertMany(landfills)
const landfillsIds = Object.values(landfillsResult.insertedIds);
print("Inserted " + landfillsIds.length + " Landfills.")

// -----------------------LOAD VEHICLES -----------------------
const vehicles = []
const makes = ["Ford","Skoda","Volvo","Toyota","Honda","Mazda","BMW","Audi","Renault","Citroen","Fiat"]
const models = ["Hirtia", "Arpagius", "Cania", "Sartorius", "Attia", "Salvian", "Auria", "Aufidia", "Titia", "Aurus", "Citria"]

for (let i = 0; i < landfillsIds.length; i++) {
  const carsWanted = Math.floor(Math.random() * 10) + 10
  for (let j = 0; j < carsWanted; j++) {       
    vehicles.push({         
      "licencePlate": generateLicencePlate(),
      "capacity" : Math.floor(Math.random() * (10000 - 1000)) + 1000,
      "homeLandfill":landfillsIds[i],
      "model": models[Math.floor(Math.random() * models.length)],
      "make": makes[Math.floor(Math.random() * makes.length)],
    })   
  }
}

const landfillPrahaId = db.landfill.aggregate([
  {
     $lookup: {
        from: "location",
        localField: "location",
        foreignField: "_id",
        as: "location"
     }
  },
  {
     $match: {
        "location.city": "Praha"
     }
  },
  {
     $limit: 1
  }  
])

landfillPrahaId.forEach(item => {
  vehicles.push({
  "licencePlate": generateLicencePlate(),
  "capacity" : Math.floor(Math.random() * (10000 - 1000)) + 1000,
  "homeLandfill":item._id,
  "model": models[Math.floor(Math.random() * models.length)],
  "make": "Skoda",
})
})

const vehiclesResult = db.vehicle.insertMany(vehicles)
const vehiclesIds = Object.values(vehiclesResult.insertedIds);
print("Inserted " + vehiclesIds.length + " Vehicles.")

function generateLicencePlate() {
  const allowedCharacters = "0123456789ABCDEFHIJKLMNPRSTUVXYZ";
  let licencePlate = "";
  for (let i = 0; i < 7; i++) {
    licencePlate += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
  }
  return licencePlate;
}

// -----------------------LOAD GARBAGECOLLECTIONS -----------------------
const garbageCollections = []
const workDays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const garbcanslist = [garbageCansIds[0],garbageCansIds[1],garbageCansIds[2]]

let vehicleIndex = 0

for (let i = 0; i < uniqueCities.length; i++) {
  garbageCollections.push({
    "garbageCans": garbageCansIds.slice(vehicleIndex*10, vehicleIndex*10+20),
    "assignedVehicle": vehiclesIds[vehicleIndex++],    
    "dayOfCollection": workDays[Math.floor(Math.random() * workDays.length)],
    "dateEnd": new Date(2023,11,5,5,5),
    "length": Math.random() * (200),
    "timeEstimate": Math.floor(Math.random() * (2000 - 60)) + 60
  })
}

const garbageCollectionsResult = db.garbageCollection.insertMany(garbageCollections)
const garbageCollectionsIds = Object.values(garbageCollectionsResult.insertedIds);
print("Inserted " + garbageCollectionsIds.length + " Collections.")