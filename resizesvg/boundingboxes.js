const fs = require("fs");


const boundingBoxes = [
    {"name":"bangladesh","vertical":654.364043490351,"horizontal":459.3320047690137,"bbArea":300570.347945181}, 
 {"name":"indonesia","vertical":1871.7159825323176,"horizontal":5082.362449947651,"bbArea":9512739.026589125}, 
 {"name":"chile","vertical":4271.216084323599,"horizontal":4553.1936258087835,"bbArea":19447673.84959416}, 
 {"name":"bolivia","vertical":1469.7138694002126,"horizontal":1337.285396909419,"bbArea":1965426.8951841414}, 
 {"name":"peru","vertical":2035.8321942742205,"horizontal":1406.98508769136,"bbArea":2864385.5383858075}, 
 {"name":"argentina","vertical":3698.913030416937,"horizontal":2056.015499853483,"bbArea":7605022.523147241}, 
 {"name":"dhekelia","vertical":20.137593043036766,"horizontal":22.499505518901447,"bbArea":453.0858858091971}, 
 {"name":"cyprus","vertical":62.49860702278702,"horizontal":166.06551072816288,"bbArea":10378.863095037874}, 
 {"name":"india","vertical":3196.8424035159683,"horizontal":2635.38485378806,"bbArea":8424910.0501734}, 
 {"name":"china","vertical":4202.514399593459,"horizontal":3911.272691854968,"bbArea":16437179.808257172}, 
 {"name":"israel","vertical":435.5544903684336,"horizontal":152.20361322880117,"bbArea":66292.96719210468}, 
 {"name":"palestine","vertical":148.0219031721724,"horizontal":128.63058568303927,"bbArea":19040.14409895466}, 
 {"name":"lebanon","vertical":181.46676499587082,"horizontal":137.5566379097817,"bbArea":24961.95808519645}, 
 {"name":"ethiopia","vertical":1276.0968386695083,"horizontal":1610.5498055872367,"bbArea":2055217.515429664}, 
 {"name":"s. sudan","vertical":970.2830624074201,"horizontal":1282.2109291015518,"bbArea":1244107.546940917}, 
 {"name":"somalia","vertical":1521.7515571783351,"horizontal":1136.753717634744,"bbArea":1729856.739938933}, 
 {"name":"kenya","vertical":1079.4684941195414,"horizontal":879.414879957703,"bbArea":949300.6561742589}, 
 {"name":"pakistan","vertical":1485.5616109558207,"horizontal":1436.2578259049385,"bbArea":2133649.489599245}, 
 {"name":"malawi","vertical":862.2178095563629,"horizontal":355.56107619704204,"bbArea":306571.09228211665}, 
 {"name":"tanzania","vertical":1194.8403189157,"horizontal":1206.9797575568532,"bbArea":1442148.0784440248}, 
 {"name":"syria","vertical":557.2946889852913,"horizontal":588.229011013999,"bbArea":327816.903745172}, 
 {"name":"somaliland","vertical":389.45104139471715,"horizontal":685.5682201819002,"bbArea":266995.25729696377}, 
 {"name":"france","vertical":8057.00904432236,"horizontal":7229.657452009899,"bbArea":58249415.47819631}, 
 {"name":"suriname","vertical":464.5804942853228,"horizontal":451.32749831813544,"bbArea":209677.95225319755}, 
 {"name":"guyana","vertical":819.7512526535075,"horizontal":540.4233119101158,"bbArea":443012.68690147466}, 
 {"name":"south korea","vertical":603.428770313292,"horizontal":629.561296577708,"bbArea":379895.3990307281}, 
 {"name":"north korea","vertical":593.18853816525,"horizontal":527.4562390436458,"bbArea":312880.99538444093}, 
 {"name":"morocco","vertical":1613.0567744888726,"horizontal":1437.4217287794906,"bbArea":2318642.8574052644}, 
 {"name":"w. sahara","vertical":766.6402623694755,"horizontal":829.4698475019576,"bbArea":635904.9815164696}, 
 {"name":"costa rica","vertical":633.239851304466,"horizontal":496.80675333839827,"bbArea":314597.83461106184}, 
 {"name":"nicaragua","vertical":480.08346937893265,"horizontal":532.6596037143914,"bbArea":255721.07054921245}, 
 {"name":"congo","vertical":970.5003077939122,"horizontal":835.3647844314978,"bbArea":810721.7804109637}, 
 {"name":"dem. rep. congo","vertical":2094.207085337252,"horizontal":2109.8394290164842,"bbArea":4418440.681170223}, 
 {"name":"bhutan","vertical":184.83397061108715,"horizontal":328.6423772377447,"bbArea":60744.27549591912}, 
 {"name":"ukraine","vertical":795.6431480508245,"horizontal":1220.709399835938,"bbArea":971249.0697406983}, 
 {"name":"belarus","vertical":547.2618848101017,"horizontal":591.17022206307,"bbArea":323524.9299698421}, 
 {"name":"namibia","vertical":1335.265099888041,"horizontal":1440.1133707278527,"bbArea":1922933.1238150299}, 
 {"name":"south africa","vertical":2762.008060745779,"horizontal":2213.5684640378154,"bbArea":6113893.940685099}, 
 {"name":"st-martin","vertical":9.868150797926226,"horizontal":14.383842279182542,"bbArea":141.9419246645602}, 
 {"name":"sint maarten","vertical":4.782438131598387,"horizontal":10.710806293640278,"bbArea":51.22376843886926}, 
 {"name":"oman","vertical":1083.4371551030968,"horizontal":783.4131419565008,"bbArea":848778.9057917297}, 
 {"name":"uzbekistan","vertical":931.0999630121551,"horizontal":1334.4506812256539,"bbArea":1242506.9799307515}, 
 {"name":"kazakhstan","vertical":1651.235222952034,"horizontal":2539.34597933776,"bbArea":4193057.5243441374}, 
 {"name":"tajikistan","vertical":484.9590904333051,"horizontal":655.7566886135926,"bbArea":318015.16725560394}, 
 {"name":"lithuania","vertical":284.18808403440715,"horizontal":361.0708518897954,"bbArea":102612.03359923215}, 
 {"name":"brazil","vertical":4337.665061473974,"horizontal":4997.146365700027,"bbArea":21675947.19756865}, 
 {"name":"uruguay","vertical":542.2464548455008,"horizontal":512.5769522352541,"bbArea":277943.03518507816}, 
 {"name":"mongolia","vertical":1172.378559775332,"horizontal":2177.873797397425,"bbArea":2553292.545965226}, 
 {"name":"russia","vertical":4521.86240925108,"horizontal":2.625001005923077e-12,"bbArea":1.1869893372929833e-8}, 
 {"name":"czechia","vertical":275.9969258030009,"horizontal":472.563156948378,"bbArea":130425.97856551336}, 
 {"name":"germany","vertical":866.678191709151,"horizontal":583.4530391963539,"bbArea":505666.02495790436}, 
 {"name":"estonia","vertical":239.63272832773578,"horizontal":356.6454585048115,"bbArea":85463.92426720425}, 
 {"name":"latvia","vertical":267.7741637058751,"horizontal":426.02244014392295,"bbArea":114077.80262947519}, 
 {"name":"norway","vertical":15037.198098676858,"horizontal":745.4507623245572,"bbArea":11209490.785884045}, 
 {"name":"sweden","vertical":1522.6695756435067,"horizontal":518.3954904199816,"bbArea":789345.0414133009}, 
 {"name":"finland","vertical":1141.3158314898303,"horizontal":414.239217171667,"bbArea":472777.77658197755}, 
 {"name":"vietnam","vertical":1645.7646469499346,"horizontal":750.5603628930721,"bbArea":1235245.7106513316}, 
 {"name":"cambodia","vertical":476.8943479982906,"horizontal":569.7059675255218,"bbArea":271689.55593381904}, 
 {"name":"luxembourg","vertical":81.5783049726157,"horizontal":56.0918823344601,"bbArea":4575.880683568661}, 
 {"name":"united arab emirates","vertical":384.05068630892765,"horizontal":480.81320021796375,"bbArea":184656.63953010083}, 
 {"name":"belgium","vertical":222.5030023464361,"horizontal":266.6790573421889,"bbArea":59336.890921554426}, 
 {"name":"georgia","vertical":281.5161172949304,"horizontal":540.293968092382,"bbArea":152101.46009523838}, 
 {"name":"macedonia","vertical":169.12112939387512,"horizontal":210.74527029531535,"bbArea":35641.47812676121}, 
 {"name":"albania","vertical":335.5645457089197,"horizontal":144.30725512611312,"bbArea":48424.39850889532}, 
 {"name":"azerbaijan","vertical":388.93779970842905,"horizontal":484.24475633098734,"bbArea":188341.09004771858}, 
 {"name":"kosovo","vertical":157.7925648345061,"horizontal":141.54033953469613,"bbArea":22334.013202726546}, 
 {"name":"turkey","vertical":698.1942532687104,"horizontal":1576.1457699856055,"bbArea":1100455.9189177365}, 
 {"name":"spain","vertical":1795.9344721284551,"horizontal":1800.707806463789,"bbArea":3233953.223859133}, 
 {"name":"laos","vertical":954.1191001684269,"horizontal":777.3335940662903,"bbArea":741668.8293012182}, 
 {"name":"kyrgyzstan","vertical":452.83802783402734,"horizontal":892.6153146791506,"bbArea":404210.1587137563}, 
 {"name":"armenia","vertical":269.8427831601255,"horizontal":264.5284010305928,"bbArea":71381.07995899298}, 
 {"name":"denmark","vertical":353.88684904446654,"horizontal":418.54850554470534,"bbArea":148118.8117994862}, 
 {"name":"libya","vertical":1521.7159655234698,"horizontal":1475.4783823093944,"bbArea":2245259.0111449473}, 
 {"name":"tunisia","vertical":791.2970578724414,"horizontal":361.0220163113014,"bbArea":285675.65933430934}, 
 {"name":"romania","vertical":514.2530398006796,"horizontal":699.4193278625819,"bbArea":359678.5154486809}, 
 {"name":"hungary","vertical":314.4473891693427,"horizontal":498.9667345231382,"bbArea":156898.78695315335}, 
 {"name":"slovakia","vertical":205.90807788793063,"horizontal":410.3240590846053,"bbArea":84489.03831728477}, 
 {"name":"poland","vertical":649.8586441205132,"horizontal":641.0413194060279,"bbArea":416586.24265442614}, 
 {"name":"ireland","vertical":438.18354247864346,"horizontal":283.2164262220592,"bbArea":124100.77693012328}, 
 {"name":"united kingdom","vertical":1216.2821563051343,"horizontal":835.6073541452089,"bbArea":1016334.3145241627}, 
 {"name":"greece","vertical":771.1898225318428,"horizontal":714.2358354945611,"bbArea":550811.407220933}, 
 {"name":"zambia","vertical":1094.9893143591453,"horizontal":1286.9404746679866,"bbArea":1409186.0679777316}, 
 {"name":"sierra leone","vertical":342.1012601403004,"horizontal":330.58555085115285,"bbArea":113093.73353035474}, 
 {"name":"guinea","vertical":609.7025872172317,"horizontal":804.7954814593428,"bbArea":490685.8872264989}, 
 {"name":"liberia","vertical":469.0386607649435,"horizontal":449.9406141581182,"bbArea":211039.54308847993}, 
 {"name":"central african rep.","vertical":974.5553360653754,"horizontal":1424.7587488850575,"bbArea":1388506.241331761}, 
 {"name":"sudan","vertical":1506.1732865585363,"horizontal":1727.7974177890922,"bbArea":2602362.3152587493}, 
 {"name":"djibouti","vertical":197.7145901195895,"horizontal":181.10349134839598,"bbArea":35806.802561174736}, 
 {"name":"eritrea","vertical":627.6746917663444,"horizontal":708.509483755077,"bbArea":444713.4718294997}, 
 {"name":"austria","vertical":292.5688657936268,"horizontal":556.0637132525542,"bbArea":162686.9298952923}, 
 {"name":"iraq","vertical":924.2936304226857,"horizontal":864.2300405298708,"bbArea":798802.3216816991}, 
 {"name":"italy","vertical":1289.414932736013,"horizontal":901.2340615175542,"bbArea":1162064.656811061}, 
 {"name":"switzerland","vertical":220.2160287795615,"horizontal":336.9414345187907,"bbArea":74199.90464101675}, 
 {"name":"iran","vertical":1635.9152340407109,"horizontal":1646.6626086783824,"bbArea":2693800.4468621835}, 
 {"name":"netherlands","vertical":4618.604571676578,"horizontal":2832.137812361521,"bbArea":13080524.647791024}, 
 {"name":"liechtenstein","vertical":23.395510819824533,"horizontal":10.552203321157366,"bbArea":246.87418697312555}, 
 {"name":"côte d'ivoire","vertical":709.6933235857317,"horizontal":667.7809986308903,"bbArea":473919.7163457555}, 
 {"name":"serbia","vertical":437.98968230708414,"horizontal":318.71045147483835,"bbArea":139591.8893894118}, 
 {"name":"mali","vertical":1651.8040932018844,"horizontal":1661.830658386481,"bbArea":2745018.683731172}, 
 {"name":"senegal","vertical":487.67702655327884,"horizontal":655.890392941135,"bbArea":319862.6765743944}, 
 {"name":"nigeria","vertical":1068.3766366868333,"horizontal":1295.1164886884987,"bbArea":1383672.1983026795}, 
 {"name":"benin","vertical":687.7805268840343,"horizontal":334.22331650416925,"bbArea":229872.28872216688}, 
 {"name":"angola","vertical":1516.7232455972664,"horizontal":1373.9042725603317,"bbArea":2083832.5474176577}, 
 {"name":"croatia","vertical":459.30816376635113,"horizontal":451.5864927285995,"bbArea":207417.36275685971}, 
 {"name":"slovenia","vertical":160.15711187000386,"horizontal":239.4743609086479,"bbArea":38353.522010044}, 
 {"name":"qatar","vertical":177.9377153623679,"horizontal":86.38694075876016,"bbArea":15371.494875758004}, 
 {"name":"saudi arabia","vertical":1751.365903443985,"horizontal":1980.563602734978,"bbArea":3468691.5634322185}, 
 {"name":"botswana","vertical":1012.9856877999517,"horizontal":992.2022150922472,"bbArea":1005086.6432918557}, 
 {"name":"zimbabwe","vertical":754.1841607933984,"horizontal":837.7699453159987,"bbArea":631832.8231460778}, 
 {"name":"bulgaria","vertical":332.5100278632061,"horizontal":498.5471405999342,"bbArea":165771.92361200586}, 
 {"name":"thailand","vertical":1647.3680538760646,"horizontal":864.6481137207342,"bbArea":1424393.680387736}, 
 {"name":"san marino","vertical":10.064408040893175,"horizontal":8.542205996662322,"bbArea":85.97224671977418}, 
 {"name":"haiti","vertical":229.4891628443233,"horizontal":297.62610305138605,"bbArea":68301.96522988088}, 
 {"name":"dominican rep.","vertical":265.9931466572127,"horizontal":384.7936081296375,"bbArea":102352.4626399847}, 
 {"name":"chad","vertical":1777.9151773880487,"horizontal":1074.5135574506771,"bbArea":1910393.9621007838}, 
 {"name":"kuwait","vertical":173.98813105040765,"horizontal":182.81553289313302,"bbArea":31807.732895060537}, 
 {"name":"el salvador","vertical":143.07869430099637,"horizontal":260.7545133636203,"bbArea":37308.4153051585}, 
 {"name":"guatemala","vertical":454.18915758819253,"horizontal":426.12260223460777,"bbArea":193540.26573822496}, 
 {"name":"timor-leste","vertical":151.91516628645257,"horizontal":361.4014094976405,"bbArea":54902.355219992394}, 
 {"name":"brunei","vertical":115.70018738269613,"horizontal":150.85269916223316,"bbArea":17453.685560255864}, 
 {"name":"monaco","vertical":5.0634322135609775,"horizontal":5.758189234212883,"bbArea":29.156200860293527}, 
 {"name":"algeria","vertical":2014.6745289923895,"horizontal":1828.0176134539936,"bbArea":3682860.5243752166}, 
 {"name":"mozambique","vertical":1822.627852561413,"horizontal":1162.72546320782,"bbArea":2119215.814124943}, 
 {"name":"eswatini","vertical":175.71772671257017,"horizontal":133.66885993816942,"bbArea":23487.98820059607}, 
 {"name":"burundi","vertical":240.21268317034796,"horizontal":205.2192624031716,"bbArea":49296.26966010556}, 
 {"name":"rwanda","vertical":196.61078291135047,"horizontal":225.75126072286767,"bbArea":44385.13211394742}, 
 {"name":"myanmar","vertical":2084.6574561434563,"horizontal":878.8446826363032,"bbArea":1832090.120449799}, 
 {"name":"malaysia","vertical":723.2583918217899,"horizontal":2164.9355107464976,"bbArea":1565807.7759003972}, 
 {"name":"andorra","vertical":24.538997770051107,"horizontal":29.33107562299743,"bbArea":719.7551993059344}, 
 {"name":"afghanistan","vertical":1010.437263798406,"horizontal":1252.7754151943122,"bbArea":1265850.9626828528}, 
 {"name":"montenegro","vertical":188.53384593427293,"horizontal":154.8693135845059,"bbArea":29198.10730728784}, 
 {"name":"bosnia and herz.","vertical":303.0412516973485,"horizontal":305.3080630100931,"bbArea":92520.93756787157}, 
 {"name":"uganda","vertical":633.2446254652244,"horizontal":605.2577973808583,"bbArea":383276.2472123483}, 
 {"name":"usnb guantanamo bay","vertical":8.94469393162521,"horizontal":14.412553835515187,"bbArea":128.91588283175435}, 
 {"name":"cuba","vertical":382.26023558085217,"horizontal":1104.7062417447196,"bbArea":422285.26821697433}, 
 {"name":"honduras","vertical":493.5804199536173,"horizontal":661.3039202690759,"bbArea":326406.6666833839}, 
 {"name":"ecuador","vertical":742.310186589391,"horizontal":1865.5409857386578,"bbArea":1384810.0772138196}, 
 {"name":"colombia","vertical":1980.9225283434853,"horizontal":1604.6983907580457,"bbArea":3178783.19344915}, 
 {"name":"paraguay","vertical":922.9317894710005,"horizontal":882.0635640564248,"bbArea":814084.5036017646}, 
 {"name":"portugal","vertical":1348.1722302814082,"horizontal":2059.8608253792427,"bbArea":2777047.163020836}, 
 {"name":"moldova","vertical":336.28281633421653,"horizontal":258.93736182955,"bbArea":87076.18529019314}, 
 {"name":"turkmenistan","vertical":850.7024949724546,"horizontal":1157.9894627026245,"bbArea":985104.5250729348}, 
 {"name":"jordan","vertical":464.9882937912627,"horizontal":403.23119167384004,"bbArea":187497.7838198365}, 
 {"name":"nepal","vertical":452.91272802175763,"horizontal":780.2646208135544,"bbArea":353391.7779915292}, 
 {"name":"lesotho","vertical":232.17954426744276,"horizontal":237.662961422184,"bbArea":55180.478072253514}, 
 {"name":"cameroon","vertical":1270.5805202360416,"horizontal":834.2407674405408,"bbArea":1059970.068296717}, 
 {"name":"gabon","vertical":696.0090595383648,"horizontal":644.7815785059461,"bbArea":448773.8200635859}, 
 {"name":"niger","vertical":1314.5013326553612,"horizontal":1611.9059418499621,"bbArea":2118852.5086768703}, 
 {"name":"burkina faso","vertical":632.4803854594165,"horizontal":849.5138837128274,"bbArea":537300.868623815}, 
 {"name":"togo","vertical":559.8104905742058,"horizontal":212.58014940500306,"bbArea":119004.59772475272}, 
 {"name":"ghana","vertical":714.5183829027785,"horizontal":485.5039780122007,"bbArea":346901.5172621438}, 
 {"name":"guinea-bissau","vertical":194.79096723051492,"horizontal":332.79534601903424,"bbArea":64825.527340861576}, 
 {"name":"gibraltar","vertical":3.404713185082886,"horizontal":1.7612222530646982,"bbArea":5.996456626870765}, 
 {"name":"united states of america","vertical":5838.451715420368,"horizontal":38.12138670312025,"bbArea":222569.8755910356}, 
 {"name":"canada","vertical":4602.036981817113,"horizontal":1065.8040534084198,"bbArea":4904869.6691561295}, 
 {"name":"mexico","vertical":2020.0317552871975,"horizontal":2951.5827107264085,"bbArea":5962290.804024012}, 
 {"name":"belize","vertical":290.3422267884669,"horizontal":153.27172745385565,"bbArea":44501.25465266745}, 
 {"name":"panama","vertical":269.4898660987446,"horizontal":645.7008053250328,"bbArea":174009.82356689463}, 
 {"name":"venezuela","vertical":1673.8899090036616,"horizontal":1452.9453760546787,"bbArea":2432070.603311457}, 
 {"name":"papua new guinea","vertical":1144.1926700496508,"horizontal":1680.6169680640958,"bbArea":1922949.6160200064}, 
 {"name":"egypt","vertical":1074.3792087598533,"horizontal":1155.1558782689704,"bbArea":1241075.4584889098}, 
 {"name":"yemen","vertical":765.4884864931943,"horizontal":1260.8590424375684,"bbArea":965173.0800767924}, 
 {"name":"mauritania","vertical":1395.611325092199,"horizontal":1211.0373530722347,"bbArea":1690137.4450572908}, 
 {"name":"eq. guinea","vertical":583.5615178627804,"horizontal":635.1394030872505,"bbArea":370642.9141200562}, 
 {"name":"gambia","vertical":83.94957019245724,"horizontal":325.112678742088,"bbArea":27293.06964451672}, 
 {"name":"hong kong","vertical":43.01877780213528,"horizontal":57.90973867134452,"bbArea":2491.2061804822906}, 
 {"name":"vatican","vertical":0.1292973057141746,"horizontal":0.10935404654657259,"bbArea":0.014139183587414277}, 
 {"name":"n. cyprus","vertical":76.6400423921839,"horizontal":179.7693370224784,"bbArea":13777.52961021754}, 
 {"name":"cyprus u.n. buffer zone","vertical":24.645301712294327,"horizontal":130.58302979716646,"bbArea":3218.2581678566876}, 
 {"name":"siachen glacier","vertical":59.75149709437845,"horizontal":92.43620683424713,"bbArea":5523.201744071883}, 
 {"name":"baikonur","vertical":91.73752483298252,"horizontal":89.46350612017469,"bbArea":8207.160614345208}, 
 {"name":"akrotiri","vertical":14.722161794678962,"horizontal":24.699288606430446,"bbArea":363.6269230773397}, 
 {"name":"antarctica","vertical":3278.4525512013092,"horizontal":9.123109439461801e-12,"bbArea":2.990968141669229e-8}, 
 {"name":"australia","vertical":5060.5163345261235,"horizontal":5065.3492369167625,"bbArea":25633282.55349671}, 
 {"name":"greenland","vertical":2651.0543200935085,"horizontal":724.6574690588548,"bbArea":1921106.313936505}, 
 {"name":"fiji","vertical":1026.9799524776397,"horizontal":1.8098571810491875e-11,"bbArea":1.8586870417852094e-8}, 
 {"name":"new zealand","vertical":4898.931262663449,"horizontal":351.663858239775,"bbArea":1722777.069079681}, 
 {"name":"new caledonia","vertical":338.8065591421731,"horizontal":809.3393228566264,"bbArea":274209.47115550993}, 
 {"name":"madagascar","vertical":1518.3630292155294,"horizontal":792.0624658398871,"bbArea":1202638.3649605727}, 
 {"name":"philippines","vertical":1831.0132261214726,"horizontal":1002.1074575723624,"bbArea":1834872.008809958}, 
 {"name":"sri lanka","vertical":434.3105367729,"horizontal":244.8215959679609,"bbArea":106328.59875844314}, 
 {"name":"curaçao","vertical":38.938186004119636,"horizontal":46.91796375216049,"bbArea":1826.900399516168}, 
 {"name":"aruba","vertical":23.848847157398914,"horizontal":20.1369028605141,"bbArea":480.2419185437897}, 
 {"name":"bahamas","vertical":668.951078021258,"horizontal":678.836097856959,"bbArea":454108.1394611569}, 
 {"name":"turks and caicos is.","vertical":74.40152586213527,"horizontal":139.4714826729953,"bbArea":10376.891125125212}, 
 {"name":"taiwan","vertical":376.15210735249804,"horizontal":374.58276769338886,"bbArea":140900.09744579945}, 
 {"name":"japan","vertical":2369.3791198891113,"horizontal":2403.6317225985276,"bbArea":5695114.815428047}, 
 {"name":"st. pierre and miquelon","vertical":43.20030210268736,"horizontal":19.047014762774474,"bbArea":822.8367919062033}, 
 {"name":"iceland","vertical":352.20372036078936,"horizontal":487.47233555909906,"bbArea":171689.5701568778}, 
 {"name":"pitcairn is.","vertical":128.17115207157056,"horizontal":607.2633557518706,"bbArea":77833.64391756525}, 
 {"name":"fr. polynesia","vertical":2189.5513015461306,"horizontal":2157.6118908970125,"bbArea":4724201.923944961}, 
 {"name":"fr. s. antarctic lands","vertical":4244.42516345508,"horizontal":4121.11581850105,"bbArea":17491767.681558635}, 
 {"name":"seychelles","vertical":663.216033972393,"horizontal":1118.3960464963293,"bbArea":741738.1903676996}, 
 {"name":"kiribati","vertical":1799.6038736377589,"horizontal":953.6529314890937,"bbArea":1716197.5096137773}, 
 {"name":"marshall is.","vertical":1116.031936876526,"horizontal":726.006257980671,"bbArea":810246.1702786471}, 
 {"name":"trinidad and tobago","vertical":145.55443252488786,"horizontal":153.34924198980963,"bbArea":22320.661895948444}, 
 {"name":"grenada","vertical":58.588260674744085,"horizontal":40.04253339502638,"bbArea":2346.022384624951}, 
 {"name":"st. vin. and gren.","vertical":88.4683188652563,"horizontal":36.336150990099995,"bbArea":3214.5981921282646}, 
 {"name":"barbados","vertical":32.6219290515121,"horizontal":24.591668699684224,"bbArea":802.2276715793895}, 
 {"name":"saint lucia","vertical":44.16855361252181,"horizontal":21.088705360079533,"bbArea":931.457613315349}, 
 {"name":"dominica","vertical":48.041559318271545,"horizontal":25.66359592790667,"bbArea":1232.9191660906804}, 
 {"name":"u.s. minor outlying is.","vertical":3180.633558383586,"horizontal":1562.4740996998853,"bbArea":4969657.555610636}, 
 {"name":"montserrat","vertical":16.00782032820323,"horizontal":9.536836611062869,"bbArea":152.663966969325}, 
 {"name":"antigua and barb.","vertical":82.11134105111827,"horizontal":23.996347709137474,"bbArea":1970.372290726208}, 
 {"name":"st. kitts and nevis","vertical":35.060655770562434,"horizontal":34.40747226769547,"bbArea":1206.348541112844}, 
 {"name":"u.s. virgin is.","vertical":78.26272198319396,"horizontal":50.870109444643305,"bbArea":3981.2332327207682}, 
 {"name":"st-barthélemy","vertical":5.243941080649576,"horizontal":8.006962259410676,"bbArea":41.98803832333439}, 
 {"name":"puerto rico","vertical":66.70075983998638,"horizontal":283.95425893446225,"bbArea":18939.964830728873}, 
 {"name":"anguilla","vertical":48.05513290171287,"horizontal":48.07481432746425,"bbArea":2310.2415917314647}, 
 {"name":"british virgin is.","vertical":45.765715934136615,"horizontal":52.990901653880115,"bbArea":2425.1665521852474}, 
 {"name":"jamaica","vertical":91.3911712836206,"horizontal":230.54848628902764,"bbArea":21070.09619961998}, 
 {"name":"cayman is.","vertical":54.90448586698208,"horizontal":176.84577433099523,"bbArea":9709.626317391629}, 
 {"name":"bermuda","vertical":15.631867027010768,"horizontal":22.38156971714073,"bbArea":349.8657216741149}, 
 {"name":"heard i. and mcdonald is.","vertical":25.681285592543837,"horizontal":38.590948360038574,"bbArea":991.0651661212619}, 
 {"name":"saint helena","vertical":3616.0661809456024,"horizontal":965.6661894558958,"bbArea":3491912.849774074}, 
 {"name":"mauritius","vertical":1133.4604627191875,"horizontal":762.4372135339765,"bbArea":864192.436846549}, 
 {"name":"comoros","vertical":113.31256469937227,"horizontal":143.44733928799315,"bbArea":16254.385914023529}, 
 {"name":"são tomé and principe","vertical":186.32505685296485,"horizontal":111.2637367642932,"bbArea":20731.222078280247}, 
 {"name":"cabo verde","vertical":266.0519656299983,"horizontal":286.1495207765949,"bbArea":76130.6424666951}, 
 {"name":"malta","vertical":30.508969113486497,"horizontal":34.47008254182242,"bbArea":1051.6466836077905}, 
 {"name":"jersey","vertical":10.641716662974828,"horizontal":16.958682176085567,"bbArea":180.46949069534398}, 
 {"name":"guernsey","vertical":35.562879692331705,"horizontal":36.161805766711915,"bbArea":1286.0179479390426}, 
 {"name":"isle of man","vertical":40.25935146186776,"horizontal":30.94109260183707,"bbArea":1245.6683216715548}, 
 {"name":"åland","vertical":64.08105156357163,"horizontal":86.75376228531692,"bbArea":5559.2723143392295}, 
 {"name":"faeroe is.","vertical":111.72897585000489,"horizontal":70.49439403892953,"bbArea":7876.266449136286}, 
 {"name":"indian ocean ter.","vertical":196.7179239301495,"horizontal":972.5002289178915,"bbArea":191308.22605432276}, 
 {"name":"br. indian ocean ter.","vertical":245.21193725303854,"horizontal":136.60453575879393,"bbArea":33497.062850965835}, 
 {"name":"singapore","vertical":20.496163484679837,"horizontal":40.35503855473902,"bbArea":827.1234676484888}, 
 {"name":"norfolk island","vertical":9.1757658703788,"horizontal":8.1917089175804,"bbArea":75.16520310601189}, 
 {"name":"cook is.","vertical":1444.6673314716031,"horizontal":934.925206898719,"bbArea":1350655.9037759088}, 
 {"name":"tonga","vertical":753.8244599425637,"horizontal":246.91626475730442,"bbArea":186131.5199317101}, 
 {"name":"wallis and futuna is.","vertical":123.4837292464745,"horizontal":223.01618163779202,"bbArea":27538.869790943685}, 
 {"name":"samoa","vertical":65.60582121775933,"horizontal":145.4355742505699,"bbArea":9541.420282985051}, 
 {"name":"solomon is.","vertical":632.7839819429598,"horizontal":1471.0240069615625,"bbArea":930840.4286588257}, 
 {"name":"tuvalu","vertical":416.2214282013612,"horizontal":418.4201140072988,"bbArea":174155.4174402943}, 
 {"name":"maldives","vertical":866.8565031390618,"horizontal":117.88348512829819,"bbArea":102188.06569616217}, 
 {"name":"nauru","vertical":6.832054457830751,"horizontal":5.700710785644518,"bbArea":38.94756653586648}, 
 {"name":"micronesia","vertical":984.9017360528742,"horizontal":2736.986707206545,"bbArea":2695662.9594813655}, 
 {"name":"s. geo. and the is.","vertical":611.6091375069539,"horizontal":773.9604869668524,"bbArea":473361.3058982586}, 
 {"name":"falkland is.","vertical":153.31112255591268,"horizontal":250.61716075308047,"bbArea":38422.39824683039}, 
 {"name":"vanuatu","vertical":799.2960809015723,"horizontal":365.93659959692576,"bbArea":292491.6899162706}, 
 {"name":"niue","vertical":19.871777089519338,"horizontal":17.61647609961623,"bbArea":350.07068615441875}, 
 {"name":"american samoa","vertical":387.1286398521251,"horizontal":319.32923701085093,"bbArea":123621.4931890276}, 
 {"name":"palau","vertical":572.3851007123413,"horizontal":395.8956232681294,"bbArea":226604.75619590338}, 
 {"name":"guam","vertical":45.933123908059706,"horizontal":35.4371488595197,"bbArea":1627.7389495126752}, 
 {"name":"n. mariana is.","vertical":716.6236970670933,"horizontal":100.65852199056826,"bbArea":72134.28217019034}, 
 {"name":"bahrain","vertical":50.376221675192056,"horizontal":19.62329832898893,"bbArea":988.5476266195723}];

const countries = [
    {
      "name": "italy",
      "synonyms": ["italian republic"],
      "continent": "europe",
      "hints": ["Home of pasta", "Home of pizza"],
          "difficulty": "easy"    
    },
    {
      "name": "albania",
      "synonyms": ["republic of albania"],
      "continent": "europe",
      "hints": ["Its in the Balkans"],
          "difficulty": "hard"    
    },  
    {
      "name": "afghanistan",
      "synonyms": ["islamic republic of afghanistan"],
      "continent": "medium",
      "hints": ["Graveyard of empires"],
          "difficulty": "easy"    
    },  
    {
      "name": "morocco",
      "synonyms": ["kingdom of morocco"],
      "continent": "africa",
      "hints": ["It's in North Africa", "South of Spain", "West of Algeria"],
          "difficulty": "easy"
    },
    {
      "name": "usa",
      "synonyms": ["u.s.a.", "us", "united states of america"],
      "continent": "north america",
      "hints": ["Uncle Sam", "The worlds superpower"],
          "difficulty": "easy"
    },
    {
      "name": "australia",
      "synonyms": ["commonwealth of australia"],
      "continent": "oceania",
      "hints": ["Down under"],
          "difficulty": "easy"    
    },
    {
      "name": "germany",
      "synonyms": ["federal republic of germany"],
      "continent": "europe",
      "hints": ["Krauts"],
          "difficulty": "medium"
    },
    {
      "name": "russia",
      "synonyms": ["russian federation"],
      "continent": "europe, asia",    
      "hints": ["Largest nation on Earth", "Successor to the Soviet Union"],
          "difficulty": "medium"
    },
    {
      "name": "niger",
      "synonyms": ["republic of niger"],
      "continent": "africa",
      "hints": ["It's in West Africa", "It's a landlocked nation east of Mali"],
          "difficulty": "hard"    
    },
    {
      "name": "netherlands",
      "synonyms": ["the netherlands", "holland"],
      "continent": "europe",    
      "hints": ["It's in Western Europe"],
          "difficulty": "medium"    
    },
    {
      "name": "china",
      "synonyms": ["people's republic of china", "peoples republic of china"],
      "continent": "asia",    
      "hints": ["The Red Dragon", "Most populous nation on Earth"],
          "difficulty": "easy"
    },
    {
      "name": "algeria",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in North Africa", "Has a Mediterranean coast"],
          "difficulty": "medium"    
    },
    {
      "name": "angola",
      "synonyms": ["Republic of Angola"],
      "continent": "africa",
      "hints": ["Has an Atlantic coast", "In Southern Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "antarctica",
      "synonyms": [],
      "continent": "antarctica",
      "hints": ["The first hint was the really answer!"],
          "difficulty": "medium"    
    },
  
    {
      "name": "argentina",
      "synonyms": ["argentine republic"],
      "continent": "south america",
      "hints": ["Second largest in Latin America"],
          "difficulty": "medium"    
    },
    {
      "name": "armenia",
      "synonyms": [],
      "continent": "asia",
      "hints": ["South of Georgia", "The first Christian nation"],
          "difficulty": "hard"    
    },
    {
      "name": "austria",
      "synonyms": [],
      "continent": "europe",
      "hints": ["They speak German here", "It's in the Alps"],
          "difficulty": "medium"    
    },
    {
      "name": "azerbaijan",
      "synonyms": ["republic of azerbaijan"],
      "continent": "asia",
      "hints": ["A country in the South Caucasus region", "Bounded by the Caspian Sea"],
          "difficulty": "hard"
    },
    {
      "name": "bangladesh",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Surrounded by India", "Bounded by the Bay of Bengal"],
          "difficulty": "medium"    
    },
    {
      "name": "belarus",
      "synonyms": ["white russia"],
      "continent": "europe",
      "hints": ["Also known as (a certain color) Russia"],
          "difficulty": "medium"    
    },
    {
      "name": "belgium",
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Western Europe", "Has three official languages"],
          "difficulty": "medium"    
    },
    {
      "name": "belize",
      "synonyms": [],
      "continent": "north america",
      "hints": ["Former British colony", "In Central America", "They don't speak Spanish here"],
          "difficulty": "hard"    
    },
    {
      "name": "benin",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "bhutan",
      "synonyms": ["kingdom of bhutan"],
      "continent": "asia",
      "hints": ["Landlocked nation in the Himalayas", "Sandwiched between China and India"],
          "difficulty": "hard"    
    },
    {
      "name": "bolivia",
      "synonyms": [],
      "continent": "south america",
      "hints": ["A landlocked country located in western-central South America", "Mostly situated in the Andean mountain range"],
          "difficulty": "medium"    
    },
    {
      "name": "bosnia and herzegovina",
      "synonyms": ["bosnia", "bosnia & herzegovina", "bosnia–herzegovina"],
      "continent": "europe",
      "hints": ["It's in the Balkans"],
          "difficulty": "medium"    
    },
    {
      "name": "botswana",
      "synonyms": [],
      "continent": "africa",
      "hints": ["Landlocked country in Southern Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "brazil",
      "synonyms": [],
      "continent": "south america",
      "hints": ["They speak Portuguese here", "Largest country of South America"],
          "difficulty": "easy"    
    },
    {
      "name": "bulgaria",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Has a Black Sea coast"],
          "difficulty": "medium"    
    },
    {
      "name": "burkina faso",
      "synonyms": [],
      "continent": "africa",
      "hints": ["A landlocked country in West Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "burundi",
      "synonyms": [],
      "continent": "africa",
      "hints": ["A landlocked country in the African Great Lakes region of East Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "cambodia",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in Southeast Asia"],
          "difficulty": "hard"    
    },
    {
      "name": "cameroon",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa", "Has an atlantic coast"],
          "difficulty": "medium"    
    },
    {
      "name": "canada",
      "synonyms": [],
      "continent": "north america",
      "hints": ["The most northern country of the Americas's", "America's hat"],
          "difficulty": "easy"    
    },
    {
      "name": "central african republic",
      "synonyms": [],
      "continent": "african",
      "hints": ["A landlocked country in Central Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "chad",
      "synonyms": [],
      "continent": "african",
      "hints": ["Landlocked country mostly in the Sahara"],
          "difficulty": "medium"    
    },
    {
      "name": "chile",
      "synonyms": ["chili"],
      "continent": "south america",
      "hints": ["Has a Pacific coast"],
          "difficulty": "easy"    
    },
    {
      "name": "colombia",
      "synonyms": ["republic of colombia"],
      "continent": "south america",
      "hints": ["Has both a Pacific and Carribean coast"],
          "difficulty": "medium"    
    },
    {
      "name": "costa rica",
      "synonyms": ["republic of costa rica"],
      "continent": "north america",
      "hints": ["It's in Central America", "Bordered by Nicaragua to the north", "Bordered by Panama to the southeast"],
          "difficulty": "medium"    
    },
    {
      "name": "croatia",
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in the Balkans"],
          "difficulty": "medium"    
    },
    {
      "name": "cuba",
      "synonyms": [],
      "continent": "north america",
      "hints": ["It's in the Carribean", "Kind of communist"],
          "difficulty": "easy"    
    },
    {
      "name": "cyprus",
      "synonyms": [],
      "continent": "europe",
      "hints": ["In the Mediterranean sea"],
          "difficulty": "medium"    
    },
    {
      "name": "czech republic",
      "synonyms": [],
      "continent": "europe",
      "hints": ["A landlocked country in Central Europe", "bordered by Germany to the west"],
          "difficulty": "medium"    
    },
    {
      "name": "democratic republic of the congo",
      "synonyms": ["congo", "big congo"],
      "continent": "africa",
      "hints": [],
          "difficulty": "medium"    
    },
    {
      "name": "denmark",
      "synonyms": ["czechia"],
      "continent": "europe",
      "hints": ["It's in Scandinavia", "North of Germany"],
          "difficulty": "medium"    
    },
    {
      "name": "dominican republic",
      "synonyms": [],
      "continent": "north america",
      "hints": ["Located in the island of Hispaniola", "In the Carribean"],
          "difficulty": "medium"    
    },
    {
      "name": "east timor",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Surrounded by Indonesia"],
          "difficulty": "medium"    
    },
    {
      "name": "ecuador",
      "synonyms": ["republic of ecuador"],
      "continent": "south america",
      "hints": ["Has a Pacific coast"],
          "difficulty": "medium"    
    },
    {
      "name": "egypt",
      "synonyms": ["arab republic of egypt"],
      "continent": "africa",
      "hints": ["Land of the Pharaohs", "Land of the Suez Canal", "The Nile ends here"],
          "difficulty": "easy"    
    },
    {
      "name": "el salvador",
      "synonyms": [],
      "continent": "north america",
      "hints": ["It's in Central America"],
          "difficulty": "medium"    
    },
    {
      "name": "equatorial guinea",
      "synonyms": [],
      "continent": "africa",
      "hints": ["Has an Atlantic coast"],
          "difficulty": "medium"    
    },
    {
      "name": "eritrea",
      "synonyms": [],
      "continent": "africa",
      "hints": ["In the Horn of Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "estonia",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Top of the Baltic Nations"],
          "difficulty": "medium"    
    },
    {
      "name": "ethiopia",
      "synonyms": [],
      "continent": "africa",
      "hints": ["In the Horn of Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "falkland islands",
      "synonyms": [],
      "continent": "south america",
      "hints": ["A war was fought over these islands in 1982", "Part of Great Britain"],
          "difficulty": "medium"    
    },
    {
      "name": "finland",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Not quite Scandinavian"],
          "difficulty": "medium"    
    },
    {
      "name": "france",
      "synonyms": [],
      "continent": "europe",
      "hints": ["The Hexagon", "It's in Western Europe"],
          "difficulty": "easy"    
    },
    {
      "name": "french polynesia",
      "synonyms": [],
      "continent": "oceania",
      "hints": ["An archipelago in the Pacific Ocean"],
          "difficulty": "hard"    
    },
    {
      "name": "gabon",
      "synonyms": ["gabonese republic"],
      "continent": "africa",
      "hints": [],
          "difficulty": "medium"    
    },
    {
      "name": "georgia",
      "synonyms": [],
      "continent": "europe",
      "hints": ["South of Russia"],
          "difficulty": "medium"    
    },
    {
      "name": "ghana",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "greece",
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Southern Europe", "Home of democracy"],
          "difficulty": "medium"    
    },
    {
      "name": "greenland",
      "synonyms": [],
      "continent": "north america",
      "hints": ["Very cold, doesn't do its name justice"],
          "difficulty": "easy"    
    },
    {
      "name": "guatemala",
      "synonyms": [],
      "continent": "north america",
      "hints": ["It's in Central America"],
          "difficulty": "medium"    
    },
    {
      "name": "guinea-bissau",
      "synonyms": ["republic of guinea-bissau"],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "guinea",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "guyana",
      "synonyms": [],
      "continent": "south america",
      "hints": ["In the north of South America"],
          "difficulty": "medium"    
    },
    {
      "name": "haiti",
      "synonyms": [],
      "continent": "north america",
      "hints": ["Located in the island of Hispaniola", "In the Carribean"],
          "difficulty": "medium"    
    },
    {
      "name": "honduras",
      "synonyms": ["republic of honduras"],
      "continent": "north america",
      "hints": ["It's in Central America"],
          "difficulty": "medium"    
    },
    {
      "name": "hungary",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Landlocked nation in Central Europe"],
          "difficulty": "medium"    
    },
    {
      "name": "iceland",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Very cold but there's also lava"],
          "difficulty": "medium"    
    },
    {
      "name": "india",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Second-most populous nation on Earth"],
          "difficulty": "medium"    
    },
    {
      "name": "indonesia",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Archipelago on the equator"],
          "difficulty": "medium"    
    },
    {
      "name": "iran",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Formerly known as Persia", "A prominent revolution occured here in 1979"],
          "difficulty": "medium"    
    },
    {
      "name": "iraq",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in the Middle East", "Fought a war with it's Eastern neighbour in the 80's"],
          "difficulty": "medium"    
    },
    {
      "name": "ireland",
      "synonyms": ["republic of ireland"],
      "continent": "europe",
      "hints": ["Only shares a border with the UK"],
          "difficulty": "medium"    
    },
    {
      "name": "israel",
      "synonyms": [],
      "continent": "asia",
      "hints": ["The Holy Land", "Bounded by the Mediterranean sea"],
          "difficulty": "medium"    
    },
    {
      "name": "ivory coast",
      "synonyms": ["cote d'ivoire", "cote divoire"],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "japan",
      "synonyms": [],
      "continent": "asia",
      "hints": ["Land of the rising sun", "Konichiwa"],
          "difficulty": "medium"    
    },
    {
      "name": "jordan",
      "synonyms": ["kingdom of jordan"],
      "continent": "asia",
      "hints": ["It's in the Middle East"],
          "difficulty": "medium"    
    },
    {
      "name": "kazakhstan",
      "synonyms": [],
      "continent": "asia",
      "hints": ["The largest -stan"],
          "difficulty": "medium"    
    },
    {
      "name": "kenya",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in East Africa"],
          "difficulty": "medium"    
    },
    {
      "name": "kosovo",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Small nation in the Balkans"],
          "difficulty": "medium"    
    },
    {
      "name": "kuwait",
      "synonyms": [],
      "continent": "asia",
      "hints": ["On the Persian gulf"],
          "difficulty": "medium"    
    },
    {
      "name": "kyrgyzstan",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in central Asia"],
          "difficulty": "hard"    
    },
    {
      "name": "laos",
      "synonyms": [],
      "continent": "asia",
      "hints": ["The only landlocked country in Southeast Asia"],
          "difficulty": "medium"    
    },
    {
      "name": "latvia",
      "synonyms": [],
      "continent": "europe",
      "hints": ["One of the Baltic nations"],
          "difficulty": "medium"    
    },
    {
      "name": "lebanon",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
      "difficulty": "medium"
    },  
    {
      "name": "liberia",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "libya",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in North Africa", "Bounded by the Mediterranean sea", "West of Egypt"],
          "difficulty": "medium"    
    },
  
    {
      "name": "lithuania",
      "synonyms": [],
      "continent": "europe",
      "hints": ["One of the Baltic nations"],
          "difficulty": "medium"    
    },
    {
      "name": "luxembourg",
      "synonyms": ["luxemburg"],
      "continent": "europe",
      "hints": ["Small nation in West Europe", "Sandwiched between Belgium, France and Germany"],
          "difficulty": "hard"    
    },
    {
      "name": "madagascar",
      "synonyms": [],
      "continent": "africa",
      "hints": ["East of the African continent", "An island nation with unique flora and fauna"],
          "difficulty": "medium"    
    },
    {
      "name": "malawi",
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's a landlocked nation in East Africa"],
          "difficulty": "hard"    
    },
    {
      "name": "malaysia",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in Southeast Asia"],
          "difficulty": "medium"    
    },
    {
      "name": "mali",
      "synonyms": [],
      "continent": "africa",
      "hints": ["landlocked nation in the Sahara"],
          "difficulty": "medium"    
    },
    {
      "name": "mauritania",
      "synonyms": [],
      "continent": "africa",
      "hints": ["Mostly in the Sahara", "Has an Atlantic coast"],
          "difficulty": "medium"    
    },
    {
      "name": "mexico",
      "synonyms": ["méxico"],
      "continent": "north america",
      "hints": ["It is bordered to the north by the United States"],
          "difficulty": "easy"    
    },
    {
      "name": "moldova",
      "synonyms": [],
      "continent": "europe",
      "hints": ["Landlocked nation in Eastern Europe"],
          "difficulty": "medium"    
    },
    {
      "name": "mongolia",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It is sandwiched between China to the south and Russia to the north"],
          "difficulty": "medium"    
    },
    {
      "name": "mozambique",
      "synonyms": [],
      "continent": "africa",
      "hints": ["Has an Indian Ocean coast"],
          "difficulty": "medium"    
    },
    {
      "name": "myanmar",
      "synonyms": ["burma"],
      "continent": "asia",
      "hints": ["It's in Southeast Asia", "Its bordered by India and Bangladesh to its west", "Its bordered by Thailand and Laos to its east", "Its bordered by China to its north and northeast"],
          "difficulty": "medium"    
    },
    {
      "name": "namibia",
      "synonyms": [],
      "continent": "africa",
      "hints": ["Has an Atlantic coast"],
          "difficulty": "medium"    
    },
    { 
      "name": "nepal",
      "synonyms": [],
      "continent": "asia",
      "hints": ["In the Himalayas", "Has the highest mountain peak on Earth"],
          "difficulty": "medium"    
    },  
    { 
      "name": "new caledonia",   
    "synonyms": ["nouvelle-calédonie", "nouvelle-caledonie"],
      "continent": "oceania",
      "hints": ["A special collectivity of France"],
          "difficulty": "hard"    
    },
    { 
      "name": "new zealand",  
      "synonyms": [],
      "continent": "oceania",
      "hints": ["East of Australia"],    
      "difficulty": "medium"    
    },  
    { 
      "name": "nicaragua",
    "synonyms": [],
      "continent": "north america",
      "hints": ["Largest country in Central America", "It's bordered by Honduras to the north", "It's bordered by Costa Rica to the south", "Has both a Carribean and Pacific coast"],
          "difficulty": "medium"    
    },  
    { 
      "name": "nigeria",
    "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa", "Its coast in the south lies on the Gulf of Guinea in the Atlantic Ocean", "Most populous country in Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "north korea",
    "synonyms": [],
      "continent": "asia",
      "hints": ["The Hermit Kingdom", "Has a southern brother it doesn't really like", "Has a chubby dictator"],
          "difficulty": "medium"    
    },  
    { 
      "name": "norway",
    "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Scandinavia"],
          "difficulty": "medium"    
    },  
    { 
      "name": "oman",
    "synonyms": [],
      "continent": "asia",
      "hints": ["On the Arabian peninsula"],
          "difficulty": "medium"    
    },  
    { 
      "name": "pakistan",
     "synonyms": [],
      "continent": "asia",
      "hints": [""],
          "difficulty": "medium"    
    },
    { 
      "name": "palestine",
      "synonyms": ["palestina"],
      "continent": "asia",
      "hints": ["It's in the Middle East", "It's complicated"],
          "difficulty": "medium"    
    },  
    { 
      "name": "panama",   
      "synonyms": [],
      "continent": "north america",
      "hints": ["Home to a famous canal", "In Central America"],
          "difficulty": "medium"    
    },  
    { 
      "name": "papua new guinea",
    "synonyms": [],
      "continent": "asia",
      "hints": ["North of Australia", "Shares a border with Indonesia"],
          "difficulty": "medium"    
    },  
    { 
      "name": "paraguay",
      "synonyms": [],
      "continent": "south america",
      "hints": ["Landlocked nation that borders Brazil"],
          "difficulty": "medium"    
    },
    { 
      "name": "peru",
    "synonyms": [],
      "continent": "south america",
      "hints": ["Land of the Inca's"],
          "difficulty": "medium"    
    },  
    { 
      "name": "philippines",
      "synonyms": ["the philippines"],
      "continent": "asia",
      "hints": ["Former Spanish colony"],
          "difficulty": "medium"    
    },  
    { 
      "name": "poland",
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Cenral Europe", "It has a Baltic coast"],
          "difficulty": "medium"    
    },  
    { 
      "name": "portugal",
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in South Europe", "On the Iberian peninsula"],
          "difficulty": "medium"    
    },
    { 
      "name": "qatar",
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's in the Persian Gulf"],
          "difficulty": "medium"    
    },  
    { 
      "name": "republic of macedonia",
      "synonyms": ["macedonia"],
      "continent": "europe",
      "hints": ["It's in the Balkans"],
          "difficulty": "medium"    
    },  
    { 
      "name": "republic of the congo",
      "synonyms": ["the congo", "congo"],
      "continent": "africa",
      "hints": ["It's in Central Africa", "Bounded by the Atlantic Ocean"],
          "difficulty": "hard"    
    },  
    { 
      "name": "romania",
     "synonyms": [],
      "continent": "europe",
      "hints": ["Bounded by the Black Sea to the east"],
          "difficulty": "medium"    
    },  
    { 
      "name": "rwanda",    
     "synonyms": [],
      "continent": "africa",
      "hints": ["It's in Central and East Africa", "It's one of the smallest countries on the African continent"],
          "difficulty": "medium"    
    },  
    { 
      "name": "saudi arabia",    
      "synonyms": [],
      "continent": "asia",
      "hints": ["In the Arabian peninsula"],
          "difficulty": "medium"    
    },  
    { 
      "name": "senegal",    
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "serbia",    
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in the Balkans"],
          "difficulty": "medium"    
    },  
    { 
      "name": "sierra leone",    
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's in West Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "slovakia",    
    "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Central Europe", "Used to be to together with Czech republic"],
          "difficulty": "medium"    
    },  
    { 
      "name": "slovenia",   
    "synonyms": [],
      "continent": "europe",
      "hints": ["Most northern country of the Balkans"],
          "difficulty": "medium"    
    },  
    { 
      "name": "solomon islands",    
    "synonyms": [],
      "continent": "oceania",
      "hints": ["Former British colony", "East of Papua New Guinea"],
          "difficulty": "medium"    
    },  
  
    { 
      "name": "south africa",    
    "synonyms": [],
      "continent": "africa",
      "hints": ["The Rainbow Nation", "It's in Southern Africa"],
          "difficulty": "easy"    
    },  
    { 
      "name": "south korea",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["Has a crazy northern brother"],
          "difficulty": "medium"    
    },  
    { 
      "name": "south sudan",    
    "synonyms": [],
      "continent": "africa",
      "hints": ["Young nation that split with the North"],
          "difficulty": "medium"    
    },  
    { 
      "name": "spain",    
    "synonyms": [],
      "continent": "europe",
      "hints": ["It's in South Europe", "On the Iberian peninsula"],
          "difficulty": "medium"    
    },  
    { 
      "name": "sri lanka",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["It's an island nation in the Indian Ocean", "India's teardrop"],
          "difficulty": "medium"    
    },  
    { 
      "name": "sudan",    
    "synonyms": ["north sudan"],
      "continent": "africa",
      "hints": ["It's a country in Northeast Africa", "Bordeded by Egypt to the North"],
          "difficulty": "hard"    
    },  
    { 
      "name": "suriname",    
    "synonyms": [],
      "continent": "south america",
      "hints": ["Former Dutch colony", "On of the few countries in South America that doen't speak Spanish"],
          "difficulty": "medium"    
    },  
    { 
      "name": "sweden",   
    "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Scandinavia"],
          "difficulty": "medium"    
    },  
    { 
      "name": "switzerland",    
    "synonyms": [],
      "continent": "europe",
      "hints": ["It's in the Alps mountain range"],
          "difficulty": "medium"    
    },  
    { 
      "name": "syria",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
          "difficulty": "medium"    
    },  
    { 
      "name": "taiwan",    
      "synonyms": ["republic of china"],
      "continent": "asia",
      "hints": ["It's an island Nation", "Recognized by few other nations"],
          "difficulty": "medium"    
    },  
    { 
      "name": "tajikistan",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["It's in Central Asia"],
          "difficulty": "medium"    
    },  
    { 
      "name": "tanzania",    
    "synonyms": [],
      "continent": "africa",
      "hints": ["It's in East Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "thailand",    
    "synonyms": ["siam", "kingdom of thailand"],
      "continent": "asia",
      "hints": ["It's in Southeast Asia"],
          "difficulty": "medium"    
    },  
    { 
      "name": "the bahamas",    
    "synonyms": ["bahamas"],
      "continent": "north america",
      "hints": ["An archipelago in the Carribean", "South East of Florida"],
          "difficulty": "medium"    
    },  
    { 
      "name": "the gambia",    
      "synonyms": ["gambia"],
      "continent": "africa",
      "hints": ["It's in West Africa", "Has an Atlantic coast", "Surrounded Entirely by Senegal"],
          "difficulty": "medium"    
    },  
    { 
      "name": "trinidad and tobago",    
      "synonyms": ["trinidad & tobago"],
      "continent": "north america",
      "hints": ["It's in the Carribean"],
          "difficulty": "medium"    
    },  
    { 
      "name": "tunisia",    
      "synonyms": [],
      "continent": "africa",
      "hints": ["On the Mediterranean"],
          "difficulty": "medium"    
    },  
    { 
      "name": "turkey",    
      "synonyms": [],
      "continent": "asia",
      "hints": ["Successor to the Ottoman Empire", "Both in Europe and Asia"],
          "difficulty": "medium"    
    },
    { 
      "name": "turkish republic of northern cyprus",    
      "synonyms": ["northern cyprus"],
      "continent": "europe",
      "hints": ["Half of an Island in the Mediterranean"],
          "difficulty": "medium"    
    },
    {
      "name": "turkmenistan",    
      "synonyms": [],
      "continent": "asia",
      "hints": ["It's one of the stans", "It shares the first four letters with a country to the south-west"],
          "difficulty": "medium"    
    },  
    { 
      "name": "uganda",    
      "synonyms": [],
      "continent": "africa",
      "hints": ["It's a landlocked country in East Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "ukraine",    
      "synonyms": [],
      "continent": "europe",
      "hints": ["It's in Eastern Europe","North of the Black Sea"],
          "difficulty": "medium"    
    },  
    {
      "name": "united arab emirates",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["On the Arabian Peninsula","On the Persian Gulf"],
          "difficulty": "medium"    
    },  
    { 
      "name": "united kingdom",    
    "synonyms": ["great britain", "uk", "u.k."],
      "continent": "europe",
      "hints": ["The Island nation of Europe"],
          "difficulty": "medium"    
    }, 
    { 
      "name": "uruguay",   
    "synonyms": [],
      "continent": "south america",
      "hints": ["South of Brazil", "Has an Atlantic coast"],
          "difficulty": "medium"    
    },  
    { 
      "name": "uzbekistan",   
    "synonyms": [],
      "continent": "asia",
      "hints": ["It's in Central Asia", "Bordered by five landlocked countries"],
          "difficulty": "medium"    
    },  
    { 
      "name": "vanuatu",   
    "synonyms": [],
      "continent": "oceania",
      "hints": ["Formerly and Anglo-French condominium"],
          "difficulty": "medium"    
    },  
  
    { 
      "name": "venezuela",    
    "synonyms": [],
      "continent": "south america",
      "hints": ["On the northern coast of South America"],
          "difficulty": "medium"    
    },  
    { 
      "name": "vietnam",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["South of China", "Formerly known as Indo-China"],
          "difficulty": "medium"
    },
    { 
      "name": "yemen",    
    "synonyms": [],
      "continent": "asia",
      "hints": ["On the Arabian peninsula"],
          "difficulty": "medium"    
    },  
    { 
      "name": "zambia",    
    "synonyms": [],
      "continent": "africa",
      "hints": ["It's in Southern Africa"],
          "difficulty": "medium"    
    },  
    { 
      "name": "zimbabwe",
    "synonyms": [],
      "continent": "africa",
      "hints": ["In Southern Africa"],
          "difficulty": "medium"    
    }
  ];

result = countries.map(x => Object.assign(x, boundingBoxes.find(y => y.name == x.name)));
  
kkk = JSON.stringify(result);

fs.writeFile('datnewnew.js', kkk, 'utf8', (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});

  
