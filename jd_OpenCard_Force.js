/*
强制入会

环境变量：VENDER_ID // venderId或vendorId的值，多个用&、@或逗号连接，但是不要混用

*/

const $ = new Env('强制入会')
const jdCookieNode = $.isNode() ? require('./jdCookie') : ''
const getH5st = require('./function/getH5st3_0')

var version_='jsjiami.com.v7';const IIl1Ilii=illillI1;function liiiilii(){const lIIiII1=(function(){return[...[version_,'xujfIsjbrRiOTxaMSmHigQW.kCcXowmwr.SUv7gr==','Au5vweq','u2vkvwu','yxbWBgLJyxrPB24VANnVBIX0zxH0l3bSywLUlcaQlYO','m1PWEeTfsq','C3rYAw5N','A2vLCc1HBgL2zq','Aw50zxjLC3rZuNvSzuXPC3q','Ag5Rvhi','6k+35yU/6zQp5Osp5zYOqM94sNpOVPpLHAxMOyBKV67MLlNLHOxLRRKk5BU66k6U6ycA6l+h6isA5PYS5y676i635y+wy29VA2LL','zKfJq20','suHLweS','CMfUzg9T','B3bLBKnHCMrtDgf0Dxm','q29VA2LLC0Pe','ALbTruu','yLvPsLi','CLLYtfm','AMrHCha7AvbOB25LoZKUnc40oZe0lJm7BMv0D29YAY80zZTnB3PPBgXHlZuUmcaOAvbOB25LoYbdufuGAvbOB25Lie9tide0xZmGBgLRzsbnywmGt1mGwcKGqxbWBgvxzwjlAxqVnJa1lJeUmtuGkeTive1mlcbSAwTLieDLy2TVksbnB2jPBguVmtvfmtq4o3n1ChbVCNrkrfniv0SVmq','zMfSC2u','C2vJB25KtgLUzurLC2m','iIWIC2HVCeLKiJOI','DMvUzgvYq2fYze5HBwu','vvnvwhK','yvDlquK','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','t2nHBLi','56YSmEASOsdPH43MLRdLVidLJAe','ugjYue4','nLzQsvzUsq','BMvWs0e','qM5iCMG','yxbPlM0UAMqUy29T','Dg1IvvG','BwfW','5BEY57Up5PIV5lYA5zgy5lQgFG','Bg9N','vxvyEvC','DuneCvy','Dgv4Dc9WBgfPBJSGq2HHCNnLDd1vveyToa','t253CuO','CwzVr1q','AvfIq3u','iIWIyMLUzej5vMvYAwz5q29KzuzSywCIoJeSiNjLz2LZDgvYrxH0zw5KiJP7FsWID3jPDgvdAgLSzezSywCIoJa','sLnvrKe','lcjHy3rPDML0EuLKiJO','Ag5IuK8','56YSm+ASOsdPH43MLRdLVidLJAe','yxf3u2O','EgXqrw8','vKTVwwC','CMvZDwX0','Ahr0Chm6lY93CxmUAMqUy29Tl215l2PPBMDKB3uVBxKUC2H0BwW/C2nLBMv2ywW9mG','CgfYC2u','BMfTzq','zMXVB3i','Ae1oANy','nNW1Fdr8n3WXFdb8mNWZ','jMnSAwvUDfzLCNnPB249os4YlJaMy2XPzw50puG1jNv1Awq9odG4odGMAdvZDd0','ntC5ndKYwfnXDNHu','ANPPA0O','venLy0q','mJaXnJe1mfvxwxLzCW','y2rkvgy','C2HVCgfJDgL2Axr5swq','sxLsExO','z0XZC2G','BeXrz3G','Cg9ZDa','mJyZnZfIshryENG','svfOzvm','yMLUzfDPDgHwzw5Kzxi','zuXgvw0','ndKWmdC2y0rmtezb','AKjkqKy','vxnLCK5HBwu','Aw50zxjLC3rZsw5MBW','zwnTsvy','q29VA2LLsKq','DhrfDMS','Ahr0Chm6lY9HCgKUBs5Qzc5JB20','kIOQkIOQcG','C3vJy2vZCW','yufKs3y','mtfzvKjUDMS','tgT2vhC','se1jt3m','A3LvsLO','qK5oCgu','sNDmt24','u1nruwe','DgXfBNu','C3bSAxq','BNjZELO','vvfHA2m'],...(function(){return[...['yuTlt24','y2LzEue','AeTZA1q','o25LDhDVCMSVD2LMAtTTB2rLBc9PugHVBMu4lde7ywrKCMvZC2LKlZiZmdG0nJa2mte7yxbWqNvPBgqVmty3ode0o2PKu3vWCg9YDerHCMTnB2rLlZa7tw96AwXSys81lJaGkgLqAg9UztSGq1bvigLqAg9UzsbpuYaXm18XxZiGBgLRzsbnywmGt1mGwcKGqxbWBgvxzwjlAxqVnJa1lJeUmtuGkeTive1mlcbSAwTLieDLy2TVksbnB2jPBguVmtvfmtq4o3n1ChbVCNrkrfniv0SVmq','DhHYq3a','y2HHCKf0','ChvZAa','wLfIzeW','Awz5zeG','AxnoB2rL','A2zWr2W','BfP4sg8','CNv2uhC','vMfsA0K','vKvorevsx0Le','ntG4otmWBKXgturp','os4YlJa','qwjIuhm','DxDewe8','vND0AgG','iefqsEIVT+AXGUwKSEI0PE+8JoIVT+AJGoAFPEE9KEI3R+MhJEIVLq','wu9RAMK','Bxvuy2u','cIOQkIOQkUw8GowNI+oaKos6Ros4NoI0PUwpTW','z2LMDeLUzM8','AxvZswC','z1PZBvy','sKDLy1u','r0HmuMG','vuDmsKi','44cq5O+q56s644cr6k+35ywi6i635y+wy29VA2LLcUEBToAoPEs9V+EuQe5VyNLeyEEAHos6Ros4NoETVUwiSoIoT+wpLG','wKvtuw4','EYj2zw5Kzxjjzci6iG','EhvXAxe','ogfKzMi','vu14u2i','C3jjsw0','ywn0AxzPDhLjza','wgnxwKG','zM9eDwW','txrOAhO','D2fSAe8','zwj6vxG','Aw5KzxG','BMLJA25HBwu','Cu5zyMi','tM5dC3y','zKnurxe','qwXuv3m','mty3mJjArezkufG','5lQS5lIC5PYn5yQH5zMO6l+u5zUE56M65PwW5O2U','yvHYBu4','s3bMr0u','A2v5CW','zNvswvi','shLdAvq','u1vOCNi','u0z2BLu','sKrFrevcvuC','rKzTq1O','nNzHwKLOrG','D3H1s08','wMDAwuq','AMrHCha7AvbOB25LoZeWlJeUndSXmY4XlJi7','z2TysKG','rhbJvxu','BhHMAgq','D2fPDa','EMGTy24','r0jAyw4','Dg9pyMO','DxnLCKLUzM8','yLf4yxu','zKvpDwm','C3rrDKC','CMv0y29Kzq','5Rs75yQO5AsQ54gR54Ig77Ym6k+356In5zco5yAn6k+v','Ahr0Chm6lY93Cs5Qzc5JB20VDxnLCI9PBMzVl1f1zxj5sKrvC2vYsw5MBZ9Zy2vUzxzHBd0Y','shbXAfq','teLRD28','EfvsBvu','jtiYjtjdjtiYy2HHBM5LBcuYmIuZqtqWmsu3rczJBgLLBNq9sduMy2XPzw50vMvYC2LVBJ05lJiUmcz1DwLKptG4odG4','ExDPtuW','BgTiDw0','r2TvEMG','yNzhEw0','lcjJAgfUBMvSiJO0mdz9','44cq6lsM5y+3','r1feC24','Efb5ANu','Be9HwNO','BurSExO','Ahr0Chm6lY9HCgKUBs5Qzc5JB20Vy2XPzw50lMfJDgLVBJ9HChbPzd1Qzf9ZAg9Wx21LBwjLCIzMDw5JDgLVBKLKpwDLDfnOB3bpCgvUq2fYzeLUzM8MyM9KEt0Ln0iLmJj2zw5KzxjjzcuYmIuZqsuYmG','y0vitxm','whvoCfu','B3LeC2K'],...(function(){return['wxDtqNG','A1DhD2u','z2LMDeXPC3q','Ahr0Chm6lY9IzwfUlM0UAMqUy29TlW','Bvb4tu0','zejdC0e','q0PZvwu','DurxB0m','Bg1kBvu','EvD2EKW','rgjLEeG','vePNBeS','zMLSDgvY','CgncD1q','rxLdy2m','D1PJCxi','Ahr0Chm6lY9HCgKUBs5Qzc5JB20Vy2XPzw50lMfJDgLVBJ9HChbPzd1Qzf9ZAg9Wx21LBwjLCIzMDw5JDgLVBKLKpwjPBMrxAxrOvMvUzgvYjMjVzhK9','z3PPCcWGzgvMBgf0zsWGyNi','Aw5KzxHpzG','AvbevxC','AM9PBLzLBMrLCKLK','zM9YrwfJAa','uwvVwfC','5BYa5y2H5AsX6lsL4P2mio+8JoIVT+MhJEAwSoAjP+IHJoIeMUACRaO','uwHftxy','56YSmUASOsdPH43MLRdLVidLJAe','u0Duq2e','DunHz0i','CufcDxa','kI8Q','z256sfe','AxHJqvu','BKnZzee','Eu9brgS','BxnN','DNr4s2y','z2v0','tffHCee','uvDzveO','AMrFC2HVCf9Tzw1Izxi','CxPquNC','verTwva','BwvZC2fNzq','5BYa5y2H5AsX6lsL4P2mio+8JoMhJEAwSoAjP+IHJoIeMUACRa','C2HVCe1LBwjLCKnHCMrjBMzV','CgPKC1u','r01cqwm','shzqrfi','uKnSuvu','zw52','v01MD1O','rhLuwgS','C1PVqui','ywjJzgvMmdeYmZq1nJC4oq','B2jQzwn0','EfnnD1q','vLvpsvm','Bwf0y2G','wLvhB1C','mtiZmJe2oe1AwxnKsq','sezZwfm','yMfZzq','ChjPEMvoyw1L','r2PVvwy','s21cre4','y09pC2u','veH3sfa','zxjYB3jkB2LUu2HVCa','wgT5B04','y29VA2LL','wK5urxm','qKnMyKO','qMrSEvC','5ywL5lYA6i635B6x77YA','B3fHAgq','zMLUywXSEq','A2Pgzhi','zgLZy291BNrtDhjPBMC','tMrRu1G','BMLJA05HBwu','zg9Uzq','z2v0zgf0yq','s0rfr3y','5lYA5zgy5y2H5zcn56EW77YA','zNb0BNy','y2f0y2G','uhnVz1G','vKfYu1y','q2vguui','BgvUz3rO','q2zcre4','q29VA2LLsKqY','mtyWr0rWwevr','rwTcy3K','Bg9NrxjY'];}())];}())];}());liiiilii=function(){return lIIiII1;};return liiiilii();};(function(I11l11Ii,i1IIl1li,IIIIii1l,I1iilIll,II1I11l1,i1l1111i,iIIllIi1){return I11l11Ii=I11l11Ii>>0x5,i1l1111i='hs',iIIllIi1='hs',function(lilI1I1l,lIlI1iII,iIlliII1,i11IilII,l111llll){const lIl1lIi1=illillI1;i11IilII='tfi',i1l1111i=i11IilII+i1l1111i,l111llll='up',iIIllIi1+=l111llll,i1l1111i=iIlliII1(i1l1111i),iIIllIi1=iIlliII1(iIIllIi1),iIlliII1=0x0;const lIlli11I=lilI1I1l();while(!![]&&--I1iilIll+lIlI1iII){try{i11IilII=-parseInt(lIl1lIi1(0x124))/0x1*(-parseInt(lIl1lIi1(0x17a))/0x2)+parseInt(lIl1lIi1(0xe3))/0x3*(parseInt(lIl1lIi1(0x128))/0x4)+-parseInt(lIl1lIi1(0x14d))/0x5+-parseInt(lIl1lIi1(0xfc))/0x6*(-parseInt(lIl1lIi1(0xbc))/0x7)+-parseInt(lIl1lIi1(0xdd))/0x8*(-parseInt(lIl1lIi1(0x16f))/0x9)+parseInt(lIl1lIi1(0x11d))/0xa*(-parseInt(lIl1lIi1(0x133))/0xb)+parseInt(lIl1lIi1(0x11a))/0xc;}catch(IIiilI1I){i11IilII=iIlliII1;}finally{l111llll=lIlli11I[i1l1111i]();if(I11l11Ii<=I1iilIll)iIlliII1?II1I11l1?i11IilII=l111llll:II1I11l1=l111llll:iIlliII1=l111llll;else{if(iIlliII1==II1I11l1['replace'](/[IUwfkrWRHOguQTxMbXCS=]/g,'')){if(i11IilII===lIlI1iII){lIlli11I['un'+i1l1111i](l111llll);break;}lIlli11I[iIIllIi1](l111llll);}}}}}(IIIIii1l,i1IIl1li,function(iII1iii,I1l11I1i,III1ii1i,IiiIIi1,IIII11l,iIIIli1i,iI1IlllI){return I1l11I1i='\x73\x70\x6c\x69\x74',iII1iii=arguments[0x0],iII1iii=iII1iii[I1l11I1i](''),III1ii1i=`\x72\x65\x76\x65\x72\x73\x65`,iII1iii=iII1iii[III1ii1i]('\x76'),IiiIIi1=`\x6a\x6f\x69\x6e`,(0x1362d7,iII1iii[IiiIIi1](''));});}(0x1980,0x2315a,liiiilii,0xce),liiiilii)&&(version_=liiiilii);let VENDER_IDs=[];if(process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)]){if(process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x1b0)]('&')>-0x1)VENDER_IDs=process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x13b)]('&');else{if(process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x1b0)]('@')>-0x1)VENDER_IDs=process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x13b)]('@');else process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x1b0)](',')>-0x1?VENDER_IDs=process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)][IIl1Ilii(0x13b)](','):VENDER_IDs=[process[IIl1Ilii(0xb2)][IIl1Ilii(0x14c)]];}}let cookiesArr=[],cookie='';if($[IIl1Ilii(0x147)]()){Object[IIl1Ilii(0x173)](jdCookieNode)[IIl1Ilii(0x1b3)](I1i11lil=>{const IiiIIil=IIl1Ilii;cookiesArr[IiiIIil(0x144)](jdCookieNode[I1i11lil]);});if(process[IIl1Ilii(0xb2)][IIl1Ilii(0x178)]&&process[IIl1Ilii(0xb2)][IIl1Ilii(0x178)]===IIl1Ilii(0xf2))console[IIl1Ilii(0x103)]=()=>{};}else cookiesArr=[$[IIl1Ilii(0xd2)](IIl1Ilii(0x12d)),$[IIl1Ilii(0xd2)](IIl1Ilii(0xdc)),...jsonParse($[IIl1Ilii(0xd2)](IIl1Ilii(0xed))||'[]')[IIl1Ilii(0x101)](liIlIl11=>liIlIl11[IIl1Ilii(0xc6)])][IIl1Ilii(0x1aa)](Ilii1IIi=>!!Ilii1IIi);function illillI1(_0x5b0a4b,_0x139495){const _0x40dd37=liiiilii();return illillI1=function(_0x27982b,_0x5cef35){_0x27982b=_0x27982b-0xa5;let _0x1d8072=_0x40dd37[_0x27982b];if(illillI1['ScGXWK']===undefined){var _0xfba587=function(_0x3231dc){const _0x3fe3fa='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1a9aa6='',_0xb2239f='';for(let _0x257f3d=0x0,_0x2a117c,_0x5947ca,_0x3a1857=0x0;_0x5947ca=_0x3231dc['charAt'](_0x3a1857++);~_0x5947ca&&(_0x2a117c=_0x257f3d%0x4?_0x2a117c*0x40+_0x5947ca:_0x5947ca,_0x257f3d++%0x4)?_0x1a9aa6+=String['fromCharCode'](0xff&_0x2a117c>>(-0x2*_0x257f3d&0x6)):0x0){_0x5947ca=_0x3fe3fa['indexOf'](_0x5947ca);}for(let _0x52778d=0x0,_0x7b90f8=_0x1a9aa6['length'];_0x52778d<_0x7b90f8;_0x52778d++){_0xb2239f+='%'+('00'+_0x1a9aa6['charCodeAt'](_0x52778d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb2239f);};illillI1['dRwuYt']=_0xfba587,_0x5b0a4b=arguments,illillI1['ScGXWK']=!![];}const _0x44cf6d=_0x40dd37[0x0],_0x49a3ee=_0x27982b+_0x44cf6d,_0x3683f1=_0x5b0a4b[_0x49a3ee];return!_0x3683f1?(_0x1d8072=illillI1['dRwuYt'](_0x1d8072),_0x5b0a4b[_0x49a3ee]=_0x1d8072):_0x1d8072=_0x3683f1,_0x1d8072;},illillI1(_0x5b0a4b,_0x139495);}allMessage='',message='',!(async()=>{const Illiii=IIl1Ilii,IlIl1lil={'aKKOn':Illiii(0x15c),'UMxSb':Illiii(0x1a1),'HMIOs':function(l1IIIill,I1il1il1){return l1IIIill<I1il1il1;},'ciYyA':Illiii(0x118),'wxuKO':function(iII1ilI){return iII1ilI();},'SeJUe':function(IIili1il){return IIili1il();},'yOADk':function(i1111lIi,lIiI){return i1111lIi+lIiI;},'YwSBx':function(iiIIIii1,IiIIII1i){return iiIIIii1(IiIIII1i);},'srIIm':function(Il1iIiIi,liIlll1l){return Il1iIiIi!==liIlll1l;},'uwDXO':Illiii(0x1a5),'TDmYP':Illiii(0x164)};if(!cookiesArr[0x0]){$[Illiii(0x1c0)]($[Illiii(0x115)],IlIl1lil[Illiii(0x13e)],IlIl1lil[Illiii(0x161)],{'open-url':IlIl1lil[Illiii(0x161)]});return;}for(let l1IlIlI1=0x0;IlIl1lil[Illiii(0x135)](l1IlIlI1,cookiesArr[Illiii(0xda)]);l1IlIlI1++){cookie=cookiesArr[l1IlIlI1];if(cookie){const l1lI1Ili=IlIl1lil[Illiii(0x13f)][Illiii(0x13b)]('|');let l1illi1=0x0;while(!![]){switch(l1lI1Ili[l1illi1++]){case'0':console[Illiii(0x103)](Illiii(0x155)+$[Illiii(0x169)]+'】'+$[Illiii(0x12a)]+Illiii(0x130));continue;case'1':$[Illiii(0x12a)]=$[Illiii(0xd0)]||$[Illiii(0x12a)];continue;case'2':await IlIl1lil[Illiii(0x17b)](getUA);continue;case'3':await IlIl1lil[Illiii(0xe1)](run);continue;case'4':message='';continue;case'5':$[Illiii(0x169)]=IlIl1lil[Illiii(0x1bf)](l1IlIlI1,0x1);continue;case'6':$[Illiii(0x12a)]=IlIl1lil[Illiii(0x19e)](decodeURIComponent,cookie[Illiii(0xba)](/pt_pin=([^; ]+)(?=;?)/)&&cookie[Illiii(0xba)](/pt_pin=([^; ]+)(?=;?)/)[0x1]);continue;case'7':$[Illiii(0xd0)]='';continue;}break;}}}allMessage&&(IlIl1lil[Illiii(0x162)](IlIl1lil[Illiii(0x150)],IlIl1lil[Illiii(0xaa)])?$[Illiii(0x1c0)]($[Illiii(0x115)],'',''+allMessage):IIIii1II[Illiii(0x103)](iIlliIil));})()[IIl1Ilii(0xd6)](I11liIII=>$[IIl1Ilii(0xdf)](I11liIII))[IIl1Ilii(0xcc)](()=>$[IIl1Ilii(0xd1)]());async function run(){const II11lII=IIl1Ilii,I1I1lIi1={'JGecU':function(iIii111l,Il111lI1){return iIii111l<Il111lI1;},'wZcqr':function(II11IIi1){return II11IIi1();},'hKskT':function(iliIi1Il,lIIIii11){return iliIi1Il>lIIIii11;},'OnwqJ':II11lII(0x18a),'NdkSX':II11lII(0xfa),'DyTXk':function(iIlIiiii){return iIlIiiii();},'jzikJ':function(lli1ll,liIlII1I){return lli1ll>liIlII1I;},'foDul':II11lII(0x1b7),'xPyju':function(IIiiIilI){return IIiiIilI();},'GHLRh':function(ilIII1I,iilli1ll){return ilIII1I!==iilli1ll;},'LkvTw':II11lII(0xf9),'walhO':II11lII(0x10e),'lkHum':function(I111l1ll){return I111l1ll();},'FFmCZ':function(iiIi1ili,ll1IIii){return iiIi1ili>ll1IIii;},'LIkwo':II11lII(0xac)};try{let lli1liii=new Array();const lIliIlI1=VENDER_IDs;for(let IIIl1ll1=0x0;I1I1lIi1[II11lII(0x159)](IIIl1ll1,lIliIlI1[II11lII(0xda)]);IIIl1ll1++){$[II11lII(0x1b2)]=lIliIlI1[IIIl1ll1],($[II11lII(0x169)]=0x1)?($[II11lII(0x11f)]='',await I1I1lIi1[II11lII(0x1ad)](getshopactivityId),lli1liii[IIIl1ll1]=$[II11lII(0x11f)]):$[II11lII(0x11f)]=lli1liii[IIIl1ll1],$[II11lII(0xc4)]='',await I1I1lIi1[II11lII(0x1ad)](joinShop),I1I1lIi1[II11lII(0x140)]($[II11lII(0xc4)][II11lII(0x1b0)](I1I1lIi1[II11lII(0x107)]),-0x1)&&(console[II11lII(0x103)](I1I1lIi1[II11lII(0xcf)]),await $[II11lII(0x181)](0x1f4),await I1I1lIi1[II11lII(0xb4)](joinShop)),I1I1lIi1[II11lII(0x11b)]($[II11lII(0xc4)][II11lII(0x1b0)](I1I1lIi1[II11lII(0x107)]),-0x1)&&(console[II11lII(0x103)](I1I1lIi1[II11lII(0x165)]),await $[II11lII(0x181)](0x1f4),await I1I1lIi1[II11lII(0x197)](joinShop)),I1I1lIi1[II11lII(0x11b)]($[II11lII(0xc4)][II11lII(0x1b0)](I1I1lIi1[II11lII(0x107)]),-0x1)&&(I1I1lIi1[II11lII(0x15a)](I1I1lIi1[II11lII(0x134)],I1I1lIi1[II11lII(0x134)])?ii1illli[II11lII(0x103)](IliIIl11):(console[II11lII(0x103)](I1I1lIi1[II11lII(0x167)]),await $[II11lII(0x181)](0x1f4),await I1I1lIi1[II11lII(0x191)](joinShop))),I1I1lIi1[II11lII(0x179)]($[II11lII(0xc4)][II11lII(0x1b0)](I1I1lIi1[II11lII(0x107)]),-0x1)&&(console[II11lII(0x103)](I1I1lIi1[II11lII(0x18d)]),allMessage+=II11lII(0x195)+$[II11lII(0x169)]+'】'+$[II11lII(0x12a)]+II11lII(0x1b5));}}catch(lllliilI){console[II11lII(0x103)](lllliilI);}}function TotalBean(){const li1iIIlI=IIl1Ilii,IIll1lll={'ixcAU':function(iiII1Ill,IIlI1ill){return iiII1Ill==IIlI1ill;},'fEOuc':li1iIIlI(0xb7),'XkyoN':function(lIiiIii1,lIllI11l){return lIiiIii1||lIllI11l;},'qfoGT':li1iIIlI(0xb6),'DpcUu':function(iil1il1i,iIilI1li){return iil1il1i<iIilI1li;},'eLFUm':function(Il1lI1l1,ilI1l1II){return Il1lI1l1*ilI1l1II;},'pcBwT':function(l1i1i11I,lIlllli1){return l1i1i11I===lIlllli1;},'oqahd':li1iIIlI(0x15b),'lmJmU':function(ilIlliIi,I1lIiIII){return ilIlliIi!==I1lIiIII;},'AlTWs':li1iIIlI(0xaf),'ruvPw':function(I1Iiii,i11lIll){return I1Iiii(i11lIll);},'fAcCm':li1iIIlI(0x142),'DbexH':function(ilI1ii11,IIi1iiii){return ilI1ii11===IIi1iiii;},'rYrLS':li1iIIlI(0x189),'xlPEo':function(IIIilI1,I1I11li){return IIIilI1!==I1I11li;},'PbrPN':li1iIIlI(0xbd),'ZNTEs':function(I1I1l1I){return I1I1l1I();},'ZgZYD':function(IIlIIl1i){return IIlIIl1i();},'tlEnu':li1iIIlI(0xe2),'kjFdr':li1iIIlI(0xf8),'qNYbb':li1iIIlI(0x1af),'lZxHo':li1iIIlI(0x182),'BCfbJ':li1iIIlI(0xe5),'HyCiT':li1iIIlI(0x113),'SSQQa':li1iIIlI(0xf1)};return new Promise(async iIllliii=>{const iIiiilIi=li1iIIlI,li11lIIl={'VArSV':function(i1iil111){const ii1iiil=illillI1;return IIll1lll[ii1iiil(0x17c)](i1iil111);}},lilillli={'url':iIiiilIi(0x18b),'headers':{'Accept':IIll1lll[iIiiilIi(0x13a)],'Content-Type':IIll1lll[iIiiilIi(0xcd)],'Accept-Encoding':IIll1lll[iIiiilIi(0x16b)],'Accept-Language':IIll1lll[iIiiilIi(0x149)],'Connection':IIll1lll[iIiiilIi(0xc8)],'Cookie':cookie,'Referer':IIll1lll[iIiiilIi(0x175)],'User-Agent':IIll1lll[iIiiilIi(0x139)]}};$[iIiiilIi(0x123)](lilillli,(IIIIilii,II11liIi,I1liiI1i)=>{const Il1l11l1=iIiiilIi,I1l11IIl={'Mthhz':function(I11il1lI,lliiIil){const i1I1liI=illillI1;return IIll1lll[i1I1liI(0x1bd)](I11il1lI,lliiIil);},'hMNjv':IIll1lll[Il1l11l1(0x187)],'cEHMs':function(i1lIlilI,lII1l1l1){const l1Iii=Il1l11l1;return IIll1lll[l1Iii(0xc5)](i1lIlilI,lII1l1l1);},'qzPRw':IIll1lll[Il1l11l1(0x108)],'QhEMv':function(lIl11iI1,ll1IIiIl){const Ili1Ili1=Il1l11l1;return IIll1lll[Ili1Ili1(0x17f)](lIl11iI1,ll1IIiIl);},'THwHP':function(iIIi1I1,Ili1illi){const iIl1II1=Il1l11l1;return IIll1lll[iIl1II1(0x127)](iIIi1I1,Ili1illi);}};if(IIll1lll[Il1l11l1(0x1ab)](IIll1lll[Il1l11l1(0xcb)],IIll1lll[Il1l11l1(0xcb)]))try{if(IIll1lll[Il1l11l1(0x1a6)](IIll1lll[Il1l11l1(0x16e)],IIll1lll[Il1l11l1(0x16e)])){let lIIl11li=l1iIil1I[Il1l11l1(0x184)](lIlIlIl,Ili11Ii);I1l11IIl[Il1l11l1(0x166)](typeof lIIl11li,I1l11IIl[Il1l11l1(0x117)])?I1l11IIl[Il1l11l1(0x166)](lIIl11li[Il1l11l1(0x131)],!![])&&(i1illilI[Il1l11l1(0x103)](Il1l11l1(0xd4)+(lIIl11li[Il1l11l1(0x112)][Il1l11l1(0xad)][Il1l11l1(0xf5)]||'')),lIIillII[Il1l11l1(0x11f)]=lIIl11li[Il1l11l1(0x112)][Il1l11l1(0xe6)]&&lIIl11li[Il1l11l1(0x112)][Il1l11l1(0xe6)][0x0]&&lIIl11li[Il1l11l1(0x112)][Il1l11l1(0xe6)][0x0][Il1l11l1(0x12b)]&&lIIl11li[Il1l11l1(0x112)][Il1l11l1(0xe6)][0x0][Il1l11l1(0x12b)][Il1l11l1(0x163)]||'',llII1i1I[Il1l11l1(0xec)]=lIIl11li[Il1l11l1(0x112)][Il1l11l1(0x185)][Il1l11l1(0xec)]):IiiIilil[Il1l11l1(0x103)](l1IIll);}else{if(IIIIilii)console[Il1l11l1(0x103)](IIll1lll[Il1l11l1(0x14a)](String,IIIIilii)),console[Il1l11l1(0x103)]($[Il1l11l1(0x115)]+Il1l11l1(0x152));else{if(IIll1lll[Il1l11l1(0x1ab)](IIll1lll[Il1l11l1(0xe9)],IIll1lll[Il1l11l1(0xe9)]))I1liiI1i?(I1liiI1i=JSON[Il1l11l1(0x114)](I1liiI1i),IIll1lll[Il1l11l1(0x1a8)](I1liiI1i[IIll1lll[Il1l11l1(0xf0)]],0x0)&&I1liiI1i[Il1l11l1(0xbe)]&&I1liiI1i[Il1l11l1(0xbe)][Il1l11l1(0x16a)]&&(IIll1lll[Il1l11l1(0x110)](IIll1lll[Il1l11l1(0xfb)],IIll1lll[Il1l11l1(0xfb)])?llil11I=iiIl1I1l[Il1l11l1(0xb2)][Il1l11l1(0x14c)][Il1l11l1(0x13b)]('&'):$[Il1l11l1(0xd0)]=I1liiI1i[Il1l11l1(0xbe)][Il1l11l1(0x16a)])):console[Il1l11l1(0x103)](Il1l11l1(0x170));else{lIll1III=I1l11IIl[Il1l11l1(0x19b)](iiIiilI1,0x20);let lIli1IlI=I1l11IIl[Il1l11l1(0xa9)],IiiiIiIi=lIli1IlI[Il1l11l1(0xda)],lIIi111i='';for(i1III111=0x0;I1l11IIl[Il1l11l1(0x1b6)](il1l1lIi,liIIlIi1);liliI1iI++)lIIi111i+=lIli1IlI[Il1l11l1(0x143)](Iil11i1l[Il1l11l1(0x116)](I1l11IIl[Il1l11l1(0xc3)](ll11111l[Il1l11l1(0xeb)](),IiiiIiIi)));return lIIi111i;}}}}catch(i1l1i111){$[Il1l11l1(0xdf)](i1l1i111);}finally{IIll1lll[Il1l11l1(0xc7)](iIllliii);}else li11lIIl[Il1l11l1(0xd8)](IlIllIlI);});});}function getUA(){const Iil1l111=IIl1Ilii,ilI11l={'JSUFA':function(ii1IiiI1,i1i1lilI){return ii1IiiI1(i1i1lilI);}};$['UA']=Iil1l111(0x17d)+ilI11l[Iil1l111(0x10b)](randomString,0x28)+Iil1l111(0x141);}function randomString(i11ll1il){const II111iil=IIl1Ilii,lllilIIi={'jBJBF':function(lIlI11i,lIIiI1il){return lIlI11i||lIIiI1il;},'CeFQB':II111iil(0xb6),'NnCsv':function(lI1lIliI,lII1llil){return lI1lIliI<lII1llil;},'fuRYR':function(ili111i1,iI1iIi1i){return ili111i1*iI1iIi1i;}};i11ll1il=lllilIIi[II111iil(0x129)](i11ll1il,0x20);let li11i1ll=lllilIIi[II111iil(0xd9)],Ii1I11Il=li11i1ll[II111iil(0xda)],IIIllIi='';for(i=0x0;lllilIIi[II111iil(0x16c)](i,i11ll1il);i++)IIIllIi+=li11i1ll[II111iil(0x143)](Math[II111iil(0x116)](lllilIIi[II111iil(0x174)](Math[II111iil(0xeb)](),Ii1I11Il)));return IIIllIi;}function joinShop(){const I111i1l1=IIl1Ilii,ilII11l={'BdlyW':function(lll11II,l11lI){return lll11II==l11lI;},'aXrmN':I111i1l1(0xe8),'cOOse':function(I1lI1Il1,iliiii1){return I1lI1Il1===iliiii1;},'YOkji':I111i1l1(0x199),'cdJTf':I111i1l1(0xd5),'TJglK':I111i1l1(0xb7),'EkBcy':function(l1I1Ilii,lli11ilI){return l1I1Ilii!==lli11ilI;},'pjdsU':I111i1l1(0x145),'LQapA':I111i1l1(0x1c1),'XuNpU':I111i1l1(0x1b8),'fCTEq':I111i1l1(0x12c),'oyDsi':I111i1l1(0x122),'KmBDN':I111i1l1(0x183),'sZoAB':I111i1l1(0xfe),'gLssh':function(lI1IIi11){return lI1IIi11();},'aWKAI':function(li1Iiiii,lilIl1II){return li1Iiiii!==lilIl1II;},'mPxMM':I111i1l1(0x14f),'IHeXK':I111i1l1(0x198),'HpqhT':I111i1l1(0xb1),'BNNpe':I111i1l1(0xa8),'muTce':I111i1l1(0x126),'UQakc':I111i1l1(0x14e),'stQvG':function(lli1lII1,illi1l1i,I1iilli1){return lli1lII1(illi1l1i,I1iilli1);},'CfBDN':I111i1l1(0x160),'TCecD':function(l1illlII,IlIiIi1i){return l1illlII(IlIiIi1i);},'KDEGv':I111i1l1(0x106),'aqwSj':I111i1l1(0x12f),'HvPDR':I111i1l1(0xff),'QeoXW':I111i1l1(0x1bb),'CJsUe':I111i1l1(0xf8)};if(!$[I111i1l1(0x1b2)])return;return new Promise(async IililiIl=>{const Iliii11I=I111i1l1,l1iliIIi={'nCsdA':function(lIlIliI1,IlII){const I1IIIl1=illillI1;return ilII11l[I1IIIl1(0xc9)](lIlIliI1,IlII);},'iNUXD':ilII11l[Iliii11I(0x171)],'GjoUf':function(l11lliIl,iII1I11l){const IiIliI=Iliii11I;return ilII11l[IiIliI(0xc2)](l11lliIl,iII1I11l);},'bvGym':ilII11l[Iliii11I(0x153)],'iusIg':ilII11l[Iliii11I(0x11e)],'IQheS':ilII11l[Iliii11I(0x1a9)],'GkUzh':function(Ii1llIi1,Iil1ilil){const iI1lI111=Iliii11I;return ilII11l[iI1lI111(0xde)](Ii1llIi1,Iil1ilil);},'lxfhd':ilII11l[Iliii11I(0xae)],'PsogX':function(IllIll1I,l1llIiIi){const i1iiI1i1=Iliii11I;return ilII11l[i1iiI1i1(0xc2)](IllIll1I,l1llIiIi);},'xSMwT':ilII11l[Iliii11I(0xa6)],'uCagB':function(lliiIii1,l1II1ii){const iI1iI1II=Iliii11I;return ilII11l[iI1iI1II(0xde)](lliiIii1,l1II1ii);},'QWYTJ':ilII11l[Iliii11I(0x19c)],'bUiJR':ilII11l[Iliii11I(0x16d)],'ebzUx':function(ilIIII1,Iil1IiI1){const liii11il=Iliii11I;return ilII11l[liii11il(0xde)](ilIIII1,Iil1IiI1);},'GQDsn':ilII11l[Iliii11I(0x19d)],'hnbRO':ilII11l[Iliii11I(0xc1)],'VKoYg':function(iIliI11l,IiIIl1lI){const II1i11II=Iliii11I;return ilII11l[II1i11II(0xde)](iIliI11l,IiIIl1lI);},'VUOIS':ilII11l[Iliii11I(0xb5)],'ZESQn':function(Ill1Iil){const I11l1lIl=Iliii11I;return ilII11l[I11l1lIl(0x121)](Ill1Iil);}};if(ilII11l[Iliii11I(0xf7)](ilII11l[Iliii11I(0x1a2)],ilII11l[Iliii11I(0x1a2)]))I1l1iII1[Iliii11I(0xdf)](li1IlIIl);else{$[Iliii11I(0xc4)]='',$[Iliii11I(0xec)]=![];let Ili1li1='';if($[Iliii11I(0x11f)])Ili1li1=Iliii11I(0x10c)+$[Iliii11I(0x11f)];if($[Iliii11I(0xec)])ilII11l[Iliii11I(0xde)](ilII11l[Iliii11I(0xea)],ilII11l[Iliii11I(0x18c)])?(console[Iliii11I(0x103)](Iliii11I(0x102)),ilII11l[Iliii11I(0x121)](IililiIl)):iI1lIil1[Iliii11I(0x103)](Iliii11I(0xca)+lllI1ii[Iliii11I(0xce)]+l1l111li[Iliii11I(0xbf)]+III111lI[Iliii11I(0xf3)]);else{const iIiI1ill=Iliii11I(0x15e)+$[Iliii11I(0x1b2)]+Iliii11I(0xf4)+$[Iliii11I(0x1b2)]+Iliii11I(0x10a)+Ili1li1+Iliii11I(0x194),i1l1lI={'appid':ilII11l[Iliii11I(0x137)],'functionId':ilII11l[Iliii11I(0x154)],'clientVersion':ilII11l[Iliii11I(0x13d)],'client':'H5','body':JSON[Iliii11I(0x114)](iIiI1ill)},lII1lII=await ilII11l[Iliii11I(0x188)](getH5st,ilII11l[Iliii11I(0xdb)],i1l1lI),iilIIlIl={'url':Iliii11I(0x1ae)+ilII11l[Iliii11I(0x11c)](encodeURIComponent,iIiI1ill)+Iliii11I(0x119)+ilII11l[Iliii11I(0x11c)](encodeURIComponent,lII1lII),'headers':{'Content-Type':ilII11l[Iliii11I(0xd3)],'Origin':ilII11l[Iliii11I(0x10f)],'Host':ilII11l[Iliii11I(0xb0)],'accept':ilII11l[Iliii11I(0x1b4)],'User-Agent':$['UA'],'content-type':ilII11l[Iliii11I(0x1a4)],'Cookie':cookie}};$[Iliii11I(0xa5)](iilIIlIl,async(I1lII111,lillI11l,IIi1I)=>{const Ii1l1ii=Iliii11I,lI1iIIII={'IyRyz':l1iliIIi[Ii1l1ii(0xe0)]};try{if(l1iliIIi[Ii1l1ii(0xc0)](l1iliIIi[Ii1l1ii(0x193)],l1iliIIi[Ii1l1ii(0x157)]))for(let llliiiIl of I11l1lli[Ii1l1ii(0x112)][Ii1l1ii(0x156)][Ii1l1ii(0x1a0)]){lII1iliI[Ii1l1ii(0x103)](Ii1l1ii(0xca)+llliiiIl[Ii1l1ii(0xce)]+llliiiIl[Ii1l1ii(0xbf)]+llliiiIl[Ii1l1ii(0xf3)]);}else{let Iii1liil=$[Ii1l1ii(0x184)](IIi1I,IIi1I);if(l1iliIIi[Ii1l1ii(0x1be)](typeof Iii1liil,l1iliIIi[Ii1l1ii(0x125)])){if(l1iliIIi[Ii1l1ii(0x192)](l1iliIIi[Ii1l1ii(0x180)],l1iliIIi[Ii1l1ii(0x180)]))l1iliIIi[Ii1l1ii(0x1be)](I1lII11[Ii1l1ii(0x131)],!![])&&(I11il1i[Ii1l1ii(0x103)](Ii1l1ii(0xd4)+(ll1lliil[Ii1l1ii(0x112)][Ii1l1ii(0xad)][Ii1l1ii(0xf5)]||'')),lIliliI1[Ii1l1ii(0x11f)]=ilI1iii[Ii1l1ii(0x112)][Ii1l1ii(0xe6)]&&llllilIl[Ii1l1ii(0x112)][Ii1l1ii(0xe6)][0x0]&&llIiii1I[Ii1l1ii(0x112)][Ii1l1ii(0xe6)][0x0][Ii1l1ii(0x12b)]&&Il11I11l[Ii1l1ii(0x112)][Ii1l1ii(0xe6)][0x0][Ii1l1ii(0x12b)][Ii1l1ii(0x163)]||'',I1IlII1l[Ii1l1ii(0xec)]=I1lIii1I[Ii1l1ii(0x112)][Ii1l1ii(0x185)][Ii1l1ii(0xec)]);else{if(l1iliIIi[Ii1l1ii(0xd7)](Iii1liil[Ii1l1ii(0x131)],!![])){if(l1iliIIi[Ii1l1ii(0x192)](l1iliIIi[Ii1l1ii(0xb8)],l1iliIIi[Ii1l1ii(0xb8)]))illi1ii1[Ii1l1ii(0xc4)]=I1i1lll[Ii1l1ii(0xab)],l1il1llI[Ii1l1ii(0x103)](''+(I1lII1I[Ii1l1ii(0xab)]||''));else{console[Ii1l1ii(0x103)](Iii1liil[Ii1l1ii(0xab)]),$[Ii1l1ii(0xc4)]=Iii1liil[Ii1l1ii(0xab)];if(Iii1liil[Ii1l1ii(0x112)]&&Iii1liil[Ii1l1ii(0x112)][Ii1l1ii(0x156)])for(let Ii11Illi of Iii1liil[Ii1l1ii(0x112)][Ii1l1ii(0x156)][Ii1l1ii(0x1a0)]){l1iliIIi[Ii1l1ii(0x1b9)](l1iliIIi[Ii1l1ii(0xa7)],l1iliIIi[Ii1l1ii(0xef)])?console[Ii1l1ii(0x103)](Ii1l1ii(0xca)+Ii11Illi[Ii1l1ii(0xce)]+Ii11Illi[Ii1l1ii(0xbf)]+Ii11Illi[Ii1l1ii(0xf3)]):iIliiIIl=iilII1il[Ii1l1ii(0xb2)][Ii1l1ii(0x14c)][Ii1l1ii(0x13b)](',');}}}else{if(l1iliIIi[Ii1l1ii(0x1be)](typeof Iii1liil,l1iliIIi[Ii1l1ii(0x125)])&&Iii1liil[Ii1l1ii(0xab)]){if(l1iliIIi[Ii1l1ii(0x168)](l1iliIIi[Ii1l1ii(0x196)],l1iliIIi[Ii1l1ii(0x10d)]))$[Ii1l1ii(0xc4)]=Iii1liil[Ii1l1ii(0xab)],console[Ii1l1ii(0x103)](''+(Iii1liil[Ii1l1ii(0xab)]||''));else try{return iliIIili[Ii1l1ii(0x114)](IIliIill);}catch(iilli1I1){return iiIlll1[Ii1l1ii(0x103)](iilli1I1),i1iII1l1[Ii1l1ii(0x1c0)](lllI1l1I[Ii1l1ii(0x115)],'',lI1iIIII[Ii1l1ii(0x120)]),[];}}else console[Ii1l1ii(0x103)](IIi1I);}}}else console[Ii1l1ii(0x103)](IIi1I);}}catch(i1l1){l1iliIIi[Ii1l1ii(0x111)](l1iliIIi[Ii1l1ii(0xb9)],l1iliIIi[Ii1l1ii(0xb9)])?iII1llil=[i11IiI1l[Ii1l1ii(0xb2)][Ii1l1ii(0x14c)]]:$[Ii1l1ii(0xdf)](i1l1,lillI11l);}finally{l1iliIIi[Ii1l1ii(0x15d)](IililiIl);}});}}});}function getshopactivityId(){const lilII11I=IIl1Ilii,lI1Iiii={'xURmU':function(lilliIi1,l1lIl11I){return lilliIi1===l1lIl11I;},'VaRkI':lilII11I(0x189),'USUXy':function(lIlillIi,lliiiiIl){return lIlillIi===lliiiiIl;},'gnzHQ':lilII11I(0x100),'nrszZ':function(lliIi1I1,lIlII1I1){return lliIi1I1==lIlII1I1;},'WMfwZ':lilII11I(0xb7),'UuXyW':function(Ii11lIi,II1iI1l1){return Ii11lIi==II1iI1l1;},'ttEvk':function(iliIlIll,I1l1llI){return iliIlIll===I1l1llI;},'kyUJZ':lilII11I(0x151),'ifydH':function(Il11Il1){return Il11Il1();},'qABup':lilII11I(0x106),'aAdKv':lilII11I(0x12f),'dBCsA':lilII11I(0xff),'hnkTr':lilII11I(0x1bb),'SUhrr':lilII11I(0xf8)};return new Promise(iili1II=>{const IiI1i=lilII11I,ill1Il1l={'gZsmV':function(l1I11iii,IiiIiIII){const I1lIl1lI=illillI1;return lI1Iiii[I1lIl1lI(0x18e)](l1I11iii,IiiIiIII);},'kWGwe':lI1Iiii[IiI1i(0x14b)],'KpfGE':function(li11liIi,iiIliIil){const l1iIII=IiI1i;return lI1Iiii[l1iIII(0xf6)](li11liIi,iiIliIil);},'uCDqV':lI1Iiii[IiI1i(0x1bc)],'gkXJH':function(Ilii1III,illI1l1i){const iiliIill=IiI1i;return lI1Iiii[iiliIill(0x13c)](Ilii1III,illI1l1i);},'SFvnU':lI1Iiii[IiI1i(0xb3)],'EyCcc':function(iiiilI1,llll1ll1){const l11lii1=IiI1i;return lI1Iiii[l11lii1(0x104)](iiiilI1,llll1ll1);},'kfpGl':function(iIllli,llilll1){const i11l1liI=IiI1i;return lI1Iiii[i11l1liI(0x12e)](iIllli,llilll1);},'ywiML':lI1Iiii[IiI1i(0x136)],'bQxau':function(iil1lllI){const I111I11l=IiI1i;return lI1Iiii[I111I11l(0x146)](iil1lllI);}},lIlIllii={'url':IiI1i(0x19a)+$[IiI1i(0x1b2)]+IiI1i(0x18f),'headers':{'Content-Type':lI1Iiii[IiI1i(0x1ba)],'Origin':lI1Iiii[IiI1i(0x132)],'Host':lI1Iiii[IiI1i(0x1a3)],'accept':lI1Iiii[IiI1i(0xe7)],'User-Agent':$['UA'],'content-type':lI1Iiii[IiI1i(0x176)],'Cookie':cookie}};$[IiI1i(0xa5)](lIlIllii,async(ilIili,i1llI1l,IiilliIl)=>{const lliiIl1l=IiI1i,iiIll11={'xuqiq':function(IilIIlII,liIii1li){const IilIi1I=illillI1;return ill1Il1l[IilIi1I(0x158)](IilIIlII,liIii1li);},'iPDUw':ill1Il1l[lliiIl1l(0x19f)]};if(ill1Il1l[lliiIl1l(0x172)](ill1Il1l[lliiIl1l(0x105)],ill1Il1l[lliiIl1l(0x105)]))try{let IIIIIliI=$[lliiIl1l(0x184)](IiilliIl,IiilliIl);ill1Il1l[lliiIl1l(0x17e)](typeof IIIIIliI,ill1Il1l[lliiIl1l(0x177)])?ill1Il1l[lliiIl1l(0x1ac)](IIIIIliI[lliiIl1l(0x131)],!![])&&(console[lliiIl1l(0x103)](lliiIl1l(0xd4)+(IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0xad)][lliiIl1l(0xf5)]||'')),$[lliiIl1l(0x11f)]=IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0xe6)]&&IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0xe6)][0x0]&&IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0xe6)][0x0][lliiIl1l(0x12b)]&&IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0xe6)][0x0][lliiIl1l(0x12b)][lliiIl1l(0x163)]||'',$[lliiIl1l(0xec)]=IIIIIliI[lliiIl1l(0x112)][lliiIl1l(0x185)][lliiIl1l(0xec)]):console[lliiIl1l(0x103)](IiilliIl);}catch(liilIili){ill1Il1l[lliiIl1l(0x148)](ill1Il1l[lliiIl1l(0x190)],ill1Il1l[lliiIl1l(0x190)])?$[lliiIl1l(0xdf)](liilIili,i1llI1l):Il1lI1i1[lliiIl1l(0x11f)]=Il11IliI[illlil];}finally{ill1Il1l[lliiIl1l(0x186)](iili1II);}else i1Ill1Ii?(II1l1iil=IilI1lii[lliiIl1l(0x114)](II11lII1),iiIll11[lliiIl1l(0x15f)](lil11il1[iiIll11[lliiIl1l(0x1b1)]],0x0)&&l1111i1i[lliiIl1l(0xbe)]&&Iiiii11l[lliiIl1l(0xbe)][lliiIl1l(0x16a)]&&(Il1li1Ii[lliiIl1l(0xd0)]=iiIIill[lliiIl1l(0xbe)][lliiIl1l(0x16a)])):liiIilll[lliiIl1l(0x103)](lliiIl1l(0x170));});});}function jsonParse(lI1IIili){const ii1iIiiI=IIl1Ilii,IiIilIii={'iQbCu':function(lll1li11,i1iiilII){return lll1li11==i1iiilII;},'nepKA':ii1iIiiI(0xe4),'jPmEE':function(i1ilIIl1,l1l1l11i){return i1ilIIl1===l1l1l11i;},'JwLOn':ii1iIiiI(0x1a7),'ZUGoW':ii1iIiiI(0xe8)};if(IiIilIii[ii1iIiiI(0x109)](typeof lI1IIili,IiIilIii[ii1iIiiI(0xfd)]))try{return JSON[ii1iIiiI(0x114)](lI1IIili);}catch(i1l1i1l1){if(IiIilIii[ii1iIiiI(0xee)](IiIilIii[ii1iIiiI(0x138)],IiIilIii[ii1iIiiI(0x138)]))return console[ii1iIiiI(0x103)](i1l1i1l1),$[ii1iIiiI(0x1c0)]($[ii1iIiiI(0x115)],'',IiIilIii[ii1iIiiI(0xbb)]),[];else l11IiIIi[ii1iIiiI(0x144)](I1lII1li[I1III1iI]);}}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
