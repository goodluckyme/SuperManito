/*
当日收支查询

7 7 7 7 *

*/

const $ = new Env('当日收支查询')
const jdCookie = require('./jdCookie')
const notify = require('./function/sendJDNotify')
const common = require('./function/jdCommon')
const { Table } = require('console-table-printer')

var iｉl='jsjiami.com.v7';const ii1Iiill=I1li1iII;(function(Ii1llilI,ilIil1Ii,i1IIiIi1,I1IIllIi,iiIllIlI,liilI1l,IlI111lI){return Ii1llilI=Ii1llilI>>0x9,liilI1l='hs',IlI111lI='hs',function(iIlillI,Iii1l111,l1ililI,Ii1I1l1,Ii11ilI){const lliiiiiI=I1li1iII;Ii1I1l1='tfi',liilI1l=Ii1I1l1+liilI1l,Ii11ilI='up',IlI111lI+=Ii11ilI,liilI1l=l1ililI(liilI1l),IlI111lI=l1ililI(IlI111lI),l1ililI=0x0;const l1Iii11I=iIlillI();while(!![]&&--I1IIllIi+Iii1l111){try{Ii1I1l1=parseInt(lliiiiiI(0x24e,'S6a]'))/0x1*(-parseInt(lliiiiiI(0x138,'xGWD'))/0x2)+parseInt(lliiiiiI(0x16d,'46p5'))/0x3*(-parseInt(lliiiiiI(0x23f,'iF[)'))/0x4)+parseInt(lliiiiiI(0x1e6,'RqwQ'))/0x5+-parseInt(lliiiiiI(0x1f0,'%jRx'))/0x6+parseInt(lliiiiiI(0x1c1,'cXVU'))/0x7*(parseInt(lliiiiiI(0x1d0,'jPWR'))/0x8)+-parseInt(lliiiiiI(0x28f,'PUn5'))/0x9*(-parseInt(lliiiiiI(0x271,'qa99'))/0xa)+-parseInt(lliiiiiI(0x216,'RqwQ'))/0xb;}catch(illlIlil){Ii1I1l1=l1ililI;}finally{Ii11ilI=l1Iii11I[liilI1l]();if(Ii1llilI<=I1IIllIi)l1ililI?iiIllIlI?Ii1I1l1=Ii11ilI:iiIllIlI=Ii11ilI:l1ililI=Ii11ilI;else{if(l1ililI==iiIllIlI['replace'](/[NhTQVArOEUpygkwf=]/g,'')){if(Ii1I1l1===Iii1l111){l1Iii11I['un'+liilI1l](Ii11ilI);break;}l1Iii11I[IlI111lI](Ii11ilI);}}}}}(i1IIiIi1,ilIil1Ii,function(iiIilIlI,l1il1lII,lII1il1i,IiIiII1I,lIIliilI,l1IiI1iI,ililI){return l1il1lII='\x73\x70\x6c\x69\x74',iiIilIlI=arguments[0x0],iiIilIlI=iiIilIlI[l1il1lII](''),lII1il1i=`\x72\x65\x76\x65\x72\x73\x65`,iiIilIlI=iiIilIlI[lII1il1i]('\x76'),IiIiII1I=`\x6a\x6f\x69\x6e`,(0x157519,iiIilIlI[IiIiII1I](''));});}(0x18200,0xcaab2,iliIli11,0xc3),iliIli11)&&(iｉl=0xc3);const isNotify=![],todayString=$[ii1Iiill(0x1f3,'SwSF')](ii1Iiill(0x1bb,'jPWR'),Date[ii1Iiill(0x291,'n@ZV')]());let cookie='';function I1li1iII(_0x5c732a,_0x460d97){const _0x20c387=iliIli11();return I1li1iII=function(_0x240d8d,_0x297432){_0x240d8d=_0x240d8d-0x12a;let _0x5779d9=_0x20c387[_0x240d8d];if(I1li1iII['fzZYNs']===undefined){var _0x284bb5=function(_0x15f4bb){const _0x1bbcc4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3a6390='',_0x550381='';for(let _0x3874ae=0x0,_0x274b65,_0x297760,_0x36a360=0x0;_0x297760=_0x15f4bb['charAt'](_0x36a360++);~_0x297760&&(_0x274b65=_0x3874ae%0x4?_0x274b65*0x40+_0x297760:_0x297760,_0x3874ae++%0x4)?_0x3a6390+=String['fromCharCode'](0xff&_0x274b65>>(-0x2*_0x3874ae&0x6)):0x0){_0x297760=_0x1bbcc4['indexOf'](_0x297760);}for(let _0x2701f2=0x0,_0x23d208=_0x3a6390['length'];_0x2701f2<_0x23d208;_0x2701f2++){_0x550381+='%'+('00'+_0x3a6390['charCodeAt'](_0x2701f2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x550381);};const _0x2ed069=function(_0x4dcd40,_0x424d6c){let _0x4e4771=[],_0x440b1b=0x0,_0x45f8ec,_0x1b99f6='';_0x4dcd40=_0x284bb5(_0x4dcd40);let _0x1677cf;for(_0x1677cf=0x0;_0x1677cf<0x100;_0x1677cf++){_0x4e4771[_0x1677cf]=_0x1677cf;}for(_0x1677cf=0x0;_0x1677cf<0x100;_0x1677cf++){_0x440b1b=(_0x440b1b+_0x4e4771[_0x1677cf]+_0x424d6c['charCodeAt'](_0x1677cf%_0x424d6c['length']))%0x100,_0x45f8ec=_0x4e4771[_0x1677cf],_0x4e4771[_0x1677cf]=_0x4e4771[_0x440b1b],_0x4e4771[_0x440b1b]=_0x45f8ec;}_0x1677cf=0x0,_0x440b1b=0x0;for(let _0x33d786=0x0;_0x33d786<_0x4dcd40['length'];_0x33d786++){_0x1677cf=(_0x1677cf+0x1)%0x100,_0x440b1b=(_0x440b1b+_0x4e4771[_0x1677cf])%0x100,_0x45f8ec=_0x4e4771[_0x1677cf],_0x4e4771[_0x1677cf]=_0x4e4771[_0x440b1b],_0x4e4771[_0x440b1b]=_0x45f8ec,_0x1b99f6+=String['fromCharCode'](_0x4dcd40['charCodeAt'](_0x33d786)^_0x4e4771[(_0x4e4771[_0x1677cf]+_0x4e4771[_0x440b1b])%0x100]);}return _0x1b99f6;};I1li1iII['BhSPMM']=_0x2ed069,_0x5c732a=arguments,I1li1iII['fzZYNs']=!![];}const _0x19e933=_0x20c387[0x0],_0x10bea0=_0x240d8d+_0x19e933,_0xb7d4f2=_0x5c732a[_0x10bea0];return!_0xb7d4f2?(I1li1iII['gaIKKD']===undefined&&(I1li1iII['gaIKKD']=!![]),_0x5779d9=I1li1iII['BhSPMM'](_0x5779d9,_0x297432),_0x5c732a[_0x10bea0]=_0x5779d9):_0x5779d9=_0xb7d4f2,_0x5779d9;},I1li1iII(_0x5c732a,_0x460d97);}const cookiesArr=Object[ii1Iiill(0x1f9,'7%bW')](jdCookie)[ii1Iiill(0x270,'A)Md')](ilII1lll=>jdCookie[ilII1lll])[ii1Iiill(0x198,'S6a]')](IiIii1iI=>IiIii1iI);!cookiesArr[0x0]&&($[ii1Iiill(0x19d,'(qFo')]($[ii1Iiill(0x17c,'!C)T')],ii1Iiill(0x221,'7%bW')),process[ii1Iiill(0x1ca,'cXVU')](0x1));function iliIli11(){const ii11I1iI=(function(){return[...[iｉl,'hTjhsrgpjAUQiNaOykmfiAVN.AcorrmN.vyw7Egy==','WQm0WR/cHG','ivhcKmk0wq','FXucW4jeBmkh','WPe3iG','WOjFiG','bYRdVSkniG','W5pcMCo1WOFcIa','e8k9r8ousa','W6dcOSoJkG8','abBdV8kKmW','smkfWOra','h8o6vWVdOmoqiSk9uv7cG8opmNG','WRutaSoHbG','WQy4WQtcLSk9tG','WPtdG8kQWPVcTmkCW7lcR8kf','W4OyqSoXW6XAWQS4','W517AW','gCosW4muW63dNh3dUNhdMWnm','6k6g5y285l2v55sd5lIz6lgf','bH7dGmkShItdGa','oSo3c8kaW6RcKCoBWPKQewVdOG','W6FcRJFdPdG','rsnltSoC','ovv1xsBdMmkJCqObW43cHa','eH7dK8kS','vCkxW5OllSkwECk7W4CVBa','W7BcMmosWPVcKW','cMDvWQ/dMG','u8oKW7K/uCoD','sSkHBY/cKmog','4P6raUAEG+ECKUITNUAXJSoE','a8kbW43dPa','w8kzsmkvW7mdWOSri8otW47dQ8ozW4u5W5FcGCogpSkRW7Hxc8oLbmoRW4KOcgSok8kptCkUW61kW4hdJ8oqESkDWPXDhq','FCkPbLVcUW','wCkPCdBcN8orW4a','bCk5WOTOWP0','yaWH','CCkXW509kG','j8kqWPXOWPO','WQ1te8k1WPPuWQGwDfFcOG','W7WKBmkfWQq','W4BcSXZdGd8','WP9YW5VcO8oI','W5T7WQO','CGygW4Hvu8kvq3Hae1C','o8ovfmkQW5C','rmkyW50p','WOWKW6dcKCoaov0lEG','r8oXW5iQ','lCk+WPS','W413WQhcJ8oN','lebnFSkPAmkJW555xCk5dSobW7dcIqBdQbJdSW','4P2XjUACKUIaP+ATU+EIVowNPUEtKci','bmkxW5JdULSgWQy','smkNfW','l8kSqmoqC1LFcGuB','WRLdW53cKG','W6ZcVt/dNZm','W4O+qmk6WPNdVa','WOypWO/cUCk5','tCkuc8k6W6yf','xCo4D8oTDGy','t8k+h1hcU8kkE8o5D13cN8kVpZ7cIa7dUSkDEshdLCkRWR/cMHBcOIBdUuxdGYruWOK','mZP0W6qh','wCo3xCojvq','W5ldS8kZW5G/lSoW','yqy1h3BcJ8kX','WORdJCkjWRWX','q1ddOYJcQa','EWiVga','W5CcD8kJymoTW5tdGSoM','qCkbWOnwWR3cI28','C8k9BJtcNa','W44LsSkHWOpdHr7cKMnlWRZcQG','W67cSCkixh4','W7pcO8k5wa','WQ1xW5RcNW','W4pcOCkMWPq+yrhcNZbZW7v3','qCkPWP9xWPS','amk2W6hdM0m','W4Sqy0tdOSoQWQW','w1DSC8okW6aJWOuKW4ePWP8','W7jFWQBcUmox','WODEiCk1sa','wHBcNbdcVKC','fSkIWOLSWRNdPNJdKa','umoGW4OMta','W6NcOmoaW7rm','kLrbEa','uwLF','WQyXWQ/cSCk8tq','fK7cOCkPErBcOtjYW7q','uSkCW5GBp8kMyG','DGnrvCoC','WPtdPqXcjmkn','t8kmW50OnSk0Cq','W4pcUCoAfa4','W7aos8ogW7O','W7RdU3K2WO1VwW','WQaWWR/cQCkwEq','CrKB','q0XEz8oAzmo1gSodfYddKSk3bG','pCoUaCkcW7VcVCou','iSk8WOnRWPNdSW','BCkEWOfwWQG','W4hdQgTTW4u','tf1Ew8ogoCkZw8oXeYJcImkVw8oWW7pdG8oMlxxdVmo3a8kkz09VW6ddQSkgq8ovbI8','B3NdQc/cRG','uSkebSk+W7CEWOS','FSk/zsJcSmotW4JcHa','W4dcNtNdMbS','m8kyW4BdJa','W7lcR8oZkYa','WRmWWRJcLW','vqnrvCog','Ea3cUc/cKa','DINcNbNcOW','WQ3dJXPGfW','W7tcM8kQWQlcH8klFc3cLmkhadVdNuC','WPtdQCkvWRKQrJxdNGO','W6K4Emk5WR4'],...(function(){return[...['44cW5OYP56At44g/6k6T5yAD6i6H5yYcW68PzLbAW4e','tmkwW44','WPpcO8o0W4eedSoJW6pdIa','W6VdHhWjWOC','WOhORkhMSldLKzJLU6RcHq','Cmk0W6GFnG','xSkbWObjWR3cJ28','W68ztSoTW5zVWQC/ALC','omkpW47dH8krW7JcGmkyumodqqa','W5BcPCkQWPq+EbhcJI93','W5L/v8kWW6XD','p1BcP8kUAa','eKn8DSk2','sSkVg1W','CXZcGaBcSq','W5JcSCkAwfq','8kIOQK4','yGiRcq','EX8e','t8o/W4e','r8o1W5iUuCoFW7eHW6pdKq','W6/dT2OnWPa','jCoTWPNdQCoiW6FdPmkgWO0TW6WzymoODWu7ig55WRddLfhcGa','W6VcJ8oFca','ytS5W7nM','msbWW6GDoW9SWRFcU3/dGa','yYfvtSoaiwJdT8kRgr9Q','WQddMCoSW73dHa','W5n7WRhcSmo+d2ef','WPK/aSoHcq','F8kBws3cKG','4PYxd+ACI+IaGEAVIEEGGUwLKUErOZy','g8kXW53dMNq','WRaffSoi','r2Dsx8og','WOuSfSo+WOa','hXRdQ8kGiYu','chtcMSkRDa','mCo8WP/dISopW67dQSkIWPe','yUkCLmon','yIP+ymoq','omkOwCoun1PHcHegW50','e8kkW4hdOG','bSksWRChW5ZcPCosdu7dNG','wxNdJHJcNq','ebBdI8k9nsm','WPZdOrza','xCkTBc/cM8ob','W4dcUX3dObddKq','m8oinSkJW4y','WQOMWQW','W6ldK1nVW6a','W7dcJ8kkWR0m','qCkuW4yBnmkH','qCkxWPC','W7lcTmkOv2lcGComW5nPAvdcGa','jSoPWPNdHG','W5P3WQBcMmoFawCjr0BdMCk1WRFcLa','DCkkW4WCfmk0E8kX','W47OR4FMSiFLP6hOTjxcQEkCSmkm5PwO5zk05BQL5PwZ5O27','yXyYkNVcICkZ','m0/cRCk1qYpcRtu','W6xdP2uQWRi','W6JcJmoJW6T6WOtdIq','jSoTWPNdGSoiW6xdJ8kTWPS4','W6/cGsxdPru','WRrhW6xcNSoAEa','W4/cGmodkru','8k+PUSom','5y+45yUM5RIB6ygP','WOtdSSkvWQm','uh/dJW','W6BcT8kOs2tcTCoOW5jOz0u','xrJcHHm','WR8CeSoNfG','rc9pxW','WOPrmCk1','W6NcPmkuWPSi','eSk5W5ZdS2K','qCk9tr3cTG','ls9SW79eoYmYWQdcVG','W6dcJ8onnG0qW601W4JdNIGHW6edASkdiXNcP8kkCImetq','pComW6/cQmksWQmm','qSkIzd/cHG','WPD5imk1yq','tCkEaG','ESo5amkbkWeIwHSxW6tcKvra','h8o7vGRcU8kEC8o8vgC','W5LZWQBcVG','W6KIrNddPG','WQ7dGs9CmG','W7rGW7ZcLSkjExf2bq','j8kaW67dH0i','umoAw8o7EG','W5nzWOlcJmoO','lSkXxCof','j3botCk1','WQNdJSoWW7xdGSox','WPNdRq1qpSkr','W4q6AwhdMa','WR3MLQJMLklMSklMG58','BaXJW48ljrW','i8ogW7G','W7FcGmo3W7bV','wCkidCksW4q','xdlcMaZcLG','WP3dTGDljmkOqrhcVc3cNSoK','WROnaCogWR5IWRXi','a0fuWQBdPa','W5pcKCkUuxW','nKPsWO/dIWSZ','E8kduW4','AgTcECoV','x8k7cK/cOmkqx8o/Bf3cGW','k8kYW7hdVmkI','bmkMWQG7WOK','W5pcPSoqWRpcKa','vvJdPI7cVW','6lwK5y2/5Psn5PER','lmkmW47dM8kxW4ZcPmkzuConva','gL5MWPhdJG','kSoTWOZdH8oeW7VdSa','bvpcRmkI'],...(function(){return['d03dHupdObfBtgNcSL5wW5K','oennySkKDSk2W59JuSk5pW','oYnHW4affWK','eSoQi8kKW5m','5P+T5P6W6kYP5yUt5lIz5PEF5lQR6lgY5y6S5yQr5PUG57Iy5Ps45O+R77Yg5B+05y2m5y2R5lMf5RsQ5yMs6iYw5y2U5zg3WPa','bXm7BSoUW4K6WPG5','a8kWvSoJFG','cCk6WOXLeSkzWRC','uSkbcCk0W6y','WR8GWQ3cU8kC','WQBdUSo8cYldTmoJW5n8yMhcLG','rmoQW4CFtq','hSkwW4xdNCkaW5VcLCogD8oBvGa','W6ScsSoM','CXexW4m','WQ/cMmk7ChtcN8oF','tSo1DmoxBq','WQexb8oF','W488qCkQ','W4RcSWVdPG','iSomW6ZcT8ksWQCm','bmkhW4BdK1qb','5P6R5PEJ5PEz6zs7','gCkeWP5iWQy','WO7dIsLMcq','t0NdQq/cJG','W6VcKZe','W5NdP8keW7GM','WQKEWPVcTmkl','WOhML6dMLz3MS5lMGyu','W5b3WQhcQmorcwK','u8oLW5uN','mmkCW5JdMSkeW5lcHa','W4VdLCkXW7a7','tSk5va/cHW','WRmee8oSgIldMConxSosc3i','WRCFgCo3abS','eSktW5ZdSW','DoIUOEAXL+wrI+w7Vvy','WQjskadcPSkLW6RLVzBLP7NJGjxKURVKUiROTO/LJPG','WOnvnSkJuCoUW4K','W4/dN8koW6uQ','tNjzWQ5TWQe','W5ldIwabWPy','x8oUDSoEBrq','W4C8sa','dmk6WOf0WRK','W5FdJeC','ce3dIKddPrLwduxcQM1QW5r/','wKb9Fa','5PYX6k6g5B2G5BQv','W5RdK1bhW4hdPcekChTyW7VcVfRdJY7dImkEW43cQZHyjmkEW7XzWRldKmkHW43cGbZcJW','Fv/dUaVcImoq','WORdTqXGpSkb','W7Sku8oM','W4vzWRhcOCo9','W6ZcKSkl','umoMW6i1xW','W53cJmoWWP7cKG','44kX5OYg56wi44ke6k6j5yET6i+d5y+ramorW6fNBmkr','W4z1xmk1W40','j8kSwSowBL0','avNcVmkkAdhcSZf5W7q','rIyo','b1hcP8kYyZy','bVcNOQvm6l+h6kkK57Ih5P6GCq','imk+WOH7','W5/cSmo+WPdcOq','z19UqSoZ','W4yzB08','WPy0emo5WRS','W6ZdM8kHW6mn','qtqbW7Xr','wSo1FCoEDr3dNa','rmkhamkZW6yGWPLpe8o8WPldVW','dCo7WRRdGSoJ','eCkQvCoEEa','WPicnCoGWOy','rZrssSkjB3JcV8kzda57WOJdGSkIBSo4','mXNdTCkagG','WQeth8o2','W7BdIg1HW6u','m8k0WP9kWQa','yaWHkwxcMG','WQtdM8o3WRZdM8krj3ddL8kCocq','oSk8uCodAeXweqqaW4e','vrBcLq','DoIUOEAXL+wMT+I1JfBIN7i/','WPPRhSo9W4pcSdhcKNzaWO3cVa','FCkrWQVdSSolWQ8hW5HSjZ0','W7Gay2JdQG','FWyYl3JcH8k/vr4','l8k+WOS','6lwP5y2E5Pw/5PAm','W6/cNSondbDeWQvyW4ZdJY9nW61byCkjBH/cJmkc','W4ZdLfqGWPu','WQRdJSoYW5FdRG','W6BcJSoDlGSj','W4KUw0hdQq','cSkOjmkklKdcKmkIW4xdPmoJqSk6','CqZcUbhcRq','WQuafmoHWRy','Dx9AWOH8','gmoQWOJdGCov','r0RcNSo+osBdHbBcUmo3','v8o5W4SQ','WP3dSSo4W73dTW','WRLhW53cLSoaya','eSkxW5ZdT1mjWO83s8kj','W5JcKSkJvMi','l8oGcCklW5dcQCox','gt1yW4WK','zCkwpfJcUW','mq9XW5qH','lmkSqmo7C1T0irmoW53cOwvPW4NcUYRdSSk9gSokWOGCWPW','WP7dRmkGWPW8','W4dcLqBdTdG','WODvcCk5q8o9','W6xcTCkMuh0','Fmkegv7cKa','W5BcVCozW6Xl','q8kRhe7cS8koFW'];}())];}())];}());iliIli11=function(){return ii11I1iI;};return iliIli11();};!(async()=>{const IIIll1i=ii1Iiill,llIi111I={'YpsDH':function(I1Il1l11,Iliiili){return I1Il1l11(Iliiili);},'OMtcg':function(li1lil1i,l11i1ilI){return li1lil1i<l11i1ilI;},'yIeeQ':IIIll1i(0x16b,'*LTy'),'RJvcB':IIIll1i(0x185,'70pE'),'lBkKT':function(ll1iilii,I11i1iIi){return ll1iilii+I11i1iIi;},'lFHDc':function(III11Il1,i1Iiill){return III11Il1(i1Iiill);},'rwkik':IIIll1i(0x27c,'Aa@g'),'lIPlW':function(lll11II1){return lll11II1();},'BPrTK':function(IlillIll,l1l1Il){return IlillIll>l1l1Il;},'nKPWX':function(i11IiII,ilI1II){return i11IiII===ilI1II;},'QJYEq':IIIll1i(0x19f,'O8DT'),'Xqnnb':IIIll1i(0x275,'7%bW'),'LMbWS':IIIll1i(0x1f7,'SIpi'),'vKZUG':IIIll1i(0x1d2,'Q5iJ'),'HjzUq':function(li1lilIl,iiiiil1l){return li1lilIl===iiiiil1l;},'DSchj':IIIll1i(0x132,'YvWC'),'Zcaob':IIIll1i(0x192,'EJ#p'),'eYdRH':IIIll1i(0x165,'RqwQ'),'dApvm':IIIll1i(0x197,'pbb&')};$[IIIll1i(0x25b,'xGWD')]=[],notify[IIIll1i(0x146,'RqwQ')]({'title':$[IIIll1i(0x161,'wKgr')]});for(let IlIli1il=0x0;llIi111I[IIIll1i(0x144,'PUn5')](IlIli1il,cookiesArr[IIIll1i(0x223,'cXVU')]);IlIli1il++){$[IIIll1i(0x1be,'OHj#')]=llIi111I[IIIll1i(0x1ce,'KR#!')](IlIli1il,0x1),cookie=cookiesArr[IlIli1il],common[IIIll1i(0x241,'!C)T')](cookie),$[IIIll1i(0x15f,'OHj#')]=llIi111I[IIIll1i(0x1c8,'YvWC')](decodeURIComponent,common[IIIll1i(0x1a4,'PUn5')](cookie,llIi111I[IIIll1i(0x25c,'%jRx')])),$['UA']=common[IIIll1i(0x289,'7%bW')]($[IIIll1i(0x1a5,'*LTy')]),$[IIIll1i(0x1aa,'Q5iJ')]=notify[IIIll1i(0x212,'YvWC')]($[IIIll1i(0x1b5,'LUh(')],$[IIIll1i(0x1a8,'6GCI')]),$[IIIll1i(0x187,'PUn5')]='',console[IIIll1i(0x17e,'Aa@g')](IIIll1i(0x20d,'KR#!')+$[IIIll1i(0x145,'xGWD')]+'】'+($[IIIll1i(0x1d6,'SIpi')]||$[IIIll1i(0x147,'n@ZV')])+IIIll1i(0x1ed,'Aa@g')),$[IIIll1i(0x1b2,'pbb&')]=common[IIIll1i(0x155,'(qFo')]($[IIIll1i(0x26f,'SwSF')]),$[IIIll1i(0x225,'!C)T')]=common[IIIll1i(0x21a,'pbb&')](),await llIi111I[IIIll1i(0x149,'Q5iJ')](Main),common[IIIll1i(0x279,'*LTy')]();if($[IIIll1i(0x1fb,'o6]d')])break;await $[IIIll1i(0x236,'LUh(')](0x3e8);}if(llIi111I[IIIll1i(0x28a,'E]je')]($[IIIll1i(0x18f,'S6a]')][IIIll1i(0x12e,'^n9K')],0x0)){if(llIi111I[IIIll1i(0x1c9,'PUn5')](llIi111I[IIIll1i(0x245,'EGbm')],llIi111I[IIIll1i(0x13a,'OHj#')]))li1IiIl[IIIll1i(0x1cd,'*mGM')]=llIi111I[IIIll1i(0x19e,'6)RX')](i1lIi1il,lIil1Iii[IIIll1i(0x226,'6GCI')]),i111ll1I[IiIIllI[IIIll1i(0x143,'7R4Y')]]?(I1Ilii[ilIlIIli[IIIll1i(0x1e7,'aAMo')]][IIIll1i(0x27d,'OHj#')]+=iIlIil[IIIll1i(0x20a,'LUh(')],llIi111I[IIIll1i(0x188,'LUh(')](new ii1li1I1(IIIi1IiI[I11Il1I1[IIIll1i(0x173,'wKgr')]][IIIll1i(0x278,'S6a]')]),new i11illll(I1lIIlI1[IIIll1i(0x18c,'SIpi')]))&&(iI1i1iI1[l1Illill[IIIll1i(0x1a2,'%jRx')]][IIIll1i(0x1c3,'PUn5')]=ili1ilI[IIIll1i(0x1f4,'5Lth')])):l1lIIilI[II11ili1[IIIll1i(0x13f,'O8DT')]]={...IIiI11i1};else{const IilIi11=new Table({'title':todayString+IIIll1i(0x203,'7%bW'),'columns':[{'title':'用户','name':llIi111I[IIIll1i(0x22d,'46p5')],'alignment':llIi111I[IIIll1i(0x1dd,'wKgr')]},{'title':'总计','name':'ie','alignment':llIi111I[IIIll1i(0x183,'5Lth')]}]});for(const iiIi1Il1 of $[IIIll1i(0x1ad,'E]je')]){if(llIi111I[IIIll1i(0x1ae,'j5L)')](llIi111I[IIIll1i(0x152,'j5L)')],llIi111I[IIIll1i(0x1d8,'%jRx')])){let {user:ii1I1l1I,ie:IlIlIIi}=iiIi1Il1;IilIi11[IIIll1i(0x247,'j5L)')]({'user':ii1I1l1I,'ie':llIi111I[IIIll1i(0x22c,'SIpi')](IlIlIIi,0x0)?'+'+IlIlIIi:''+IlIlIIi});}else iIllilIi[IIIll1i(0x1a1,'qa99')](llliiIii[IIIll1i(0x22b,'KR#!')],llIi111I[IIIll1i(0x1bf,'xGWD')]),i1IlliI1[IIIll1i(0x195,'o6]d')](0x1);}console[IIIll1i(0x1c0,'^n9K')]('\x0a'),IilIi11[IIIll1i(0x172,'SwSF')]();}}const Il11lIlI=notify[IIIll1i(0x224,'6GCI')]();Il11lIlI&&(console[IIIll1i(0x213,'PQ2V')](IIIll1i(0x227,'!C)T')+Il11lIlI[IIIll1i(0x295,'o6]d')](/：/g,llIi111I[IIIll1i(0x232,'cXVU')])),isNotify&&(llIi111I[IIIll1i(0x202,'(qFo')](llIi111I[IIIll1i(0x257,'jPWR')],llIi111I[IIIll1i(0x286,'n@ZV')])?(delete ii1l1iil[IIIll1i(0x28e,'*LTy')],delete llI1IiI1[IIIll1i(0x262,'5Lth')][llIi111I[IIIll1i(0x25d,'fcp5')]]):await notify[IIIll1i(0x205,'Aa@g')]()));})()[ii1Iiill(0x26c,'LUh(')](i1liliI=>$[ii1Iiill(0x239,'!C)T')](i1liliI))[ii1Iiill(0x22f,'YvWC')](()=>$[ii1Iiill(0x1f8,'PQ2V')]());async function Main(){const iI1Illil=ii1Iiill,I1illIl1={'MkMJM':function(IIlI1llI,llIIl11I){return IIlI1llI===llIIl11I;},'XYfoA':iI1Illil(0x158,'l#fO'),'QHtSp':function(IIIl1iI1,IIil1I1l){return IIIl1iI1!==IIil1I1l;},'TWYwl':iI1Illil(0x235,'S6a]'),'LBhRZ':iI1Illil(0x281,'fcp5'),'kCrDe':function(IIiIIIil,lI1i1i1i){return IIiIIIil<=lI1i1i1i;},'PMAql':function(iI1li1lI,i11l1i){return iI1li1lI(i11l1i);},'BkWvI':iI1Illil(0x258,'cXVU'),'vIKCY':function(IlIil1II,IIII1II1){return IlIil1II===IIII1II1;},'OvTzf':iI1Illil(0x190,'6GCI'),'HybRd':iI1Illil(0x283,'n@ZV'),'qUYDr':function(IlIliII,illIlIl){return IlIliII(illIlIl);},'dKteS':function(Ill1I1I,iii1l1il){return Ill1I1I<iii1l1il;},'OPnot':iI1Illil(0x211,'EGbm'),'GmXsT':function(Iii1I1iI,ii1lll1I){return Iii1I1iI>ii1lll1I;},'KXSei':iI1Illil(0x1fc,'PQ2V'),'voGlR':iI1Illil(0x24f,'Aa@g'),'Yjoie':iI1Illil(0x182,'j5L)'),'uMjoc':iI1Illil(0x1b0,'70pE'),'mPnlu':iI1Illil(0x142,'KR#!'),'mCuLN':iI1Illil(0x251,'E]je'),'PxaBf':iI1Illil(0x180,'EGbm'),'CvDiF':function(iIilI1iI,i1II11){return iIilI1iI>i1II11;},'SmJJW':iI1Illil(0x272,'QePL'),'oIMQt':function(llIiII1I,i1liii1l){return llIiII1I+i1liii1l;},'iQzLx':iI1Illil(0x1ea,'(qFo'),'oelEX':iI1Illil(0x160,'7%bW')};try{$[iI1Illil(0x1e2,'wKgr')]=![];const iliIlilI=await common[iI1Illil(0x157,'QePL')](cookie);if(!iliIlilI&&I1illIl1[iI1Illil(0x255,'jPWR')](typeof iliIlilI,I1illIl1[iI1Illil(0x250,'*m5y')])){if(I1illIl1[iI1Illil(0x27b,'h!TM')](I1illIl1[iI1Illil(0x189,'OHj#')],I1illIl1[iI1Illil(0x1db,'QePL')])){console[iI1Illil(0x17d,'5Lth')](iI1Illil(0x1e1,'EJ#p'));return;}else IiII1II[i1IiiiI[iI1Illil(0x1e7,'aAMo')]][iI1Illil(0x20b,'o6]d')]=iiiiiI1I[iI1Illil(0x21c,'SwSF')];}let IilI1lIl=new Map();l1li1III:for(let ill1ii=0x1;I1illIl1[iI1Illil(0x207,'46p5')](ill1ii,0x14);ill1ii++){$[iI1Illil(0x254,'l#fO')]=''+ill1ii,$[iI1Illil(0x17f,'Aa@g')]=[],await I1illIl1[iI1Illil(0x170,'*LTy')](sendRequest,I1illIl1[iI1Illil(0x16a,'PQ2V')]);const i11i1ii1=$[iI1Illil(0x252,'o6]d')];if(I1illIl1[iI1Illil(0x1fe,'*mGM')](i11i1ii1[iI1Illil(0x150,'*mGM')],0x0))break;for(let ii1111i1 of i11i1ii1){if(I1illIl1[iI1Illil(0x18e,'SIpi')](I1illIl1[iI1Illil(0x177,'aAMo')],I1illIl1[iI1Illil(0x177,'aAMo')]))lilIiiiI[iI1Illil(0x252,'o6]d')]=llIIiIIi[iI1Illil(0x297,'cXVU')];else{let i11lli1l=ii1111i1[iI1Illil(0x1b4,'RqwQ')][iI1Illil(0x1ee,'^n9K')]('\x20')[0x0];if(I1illIl1[iI1Illil(0x1e9,'l#fO')](i11lli1l,todayString)){if(I1illIl1[iI1Illil(0x237,'6)RX')](I1illIl1[iI1Illil(0x1ec,'cXVU')],I1illIl1[iI1Illil(0x24c,'HB%4')]))ii1111i1[iI1Illil(0x12c,'PQ2V')]=I1illIl1[iI1Illil(0x265,'S6a]')](parseInt,ii1111i1[iI1Illil(0x26d,'(qFo')]),IilI1lIl[ii1111i1[iI1Illil(0x143,'7R4Y')]]?(IilI1lIl[ii1111i1[iI1Illil(0x274,'l#fO')]][iI1Illil(0x19b,'7%bW')]+=ii1111i1[iI1Illil(0x1a0,'*LTy')],I1illIl1[iI1Illil(0x1b9,'o6]d')](new Date(IilI1lIl[ii1111i1[iI1Illil(0x184,'jPWR')]][iI1Illil(0x1b6,'70pE')]),new Date(ii1111i1[iI1Illil(0x199,'*mGM')]))&&(IilI1lIl[ii1111i1[iI1Illil(0x230,'^n9K')]][iI1Illil(0x26a,'qa99')]=ii1111i1[iI1Illil(0x1b7,'xGWD')])):I1illIl1[iI1Illil(0x285,'*LTy')](I1illIl1[iI1Illil(0x253,'%jRx')],I1illIl1[iI1Illil(0x166,'RqwQ')])?IilIlIil=iliili1i[iI1Illil(0x171,'qa99')](/参加\[/g,'')[iI1Illil(0x1bd,'iF[)')](/\].*/g,''):IilI1lIl[ii1111i1[iI1Illil(0x28c,'5Lth')]]={...ii1111i1};else{Ii1IiIIi[iI1Illil(0x1d1,'iF[)')](iI1Illil(0x243,'iF[)'));return;}}else break l1li1III;}}$[iI1Illil(0x14a,'aAMo')](0x3e8);}const li1I1I1=Object[iI1Illil(0x19a,'OHj#')](IilI1lIl);let liIIlIli=0x0,I1l1III=0x0;if(I1illIl1[iI1Illil(0x261,'6GCI')](li1I1I1[iI1Illil(0x1cc,'*m5y')],0x0)){const Ill11lll=new Table({'columns':[{'title':I1illIl1[iI1Illil(0x256,'fcp5')],'name':I1illIl1[iI1Illil(0x222,'A)Md')],'alignment':I1illIl1[iI1Illil(0x136,'pbb&')]},{'title':I1illIl1[iI1Illil(0x164,'70pE')],'name':I1illIl1[iI1Illil(0x135,'15G$')],'alignment':I1illIl1[iI1Illil(0x176,'6GCI')]},{'title':'明细','name':I1illIl1[iI1Illil(0x18b,'o6]d')],'alignment':I1illIl1[iI1Illil(0x240,'KR#!')]}]});for(const lIlI1ii1 of li1I1I1){let {date:lIlIllI,amount:I1l1I1I1,eventMassage:III1i11l}=lIlI1ii1;I1illIl1[iI1Illil(0x22a,'QePL')](I1l1I1I1,0x0)?liIIlIli+=I1l1I1I1:I1l1III+=I1l1I1I1,III1i11l=III1i11l[iI1Illil(0x282,'OHj#')](/（商品:.*）/g,'')[iI1Illil(0x171,'qa99')](/订单.*使用京豆.*个/g,I1illIl1[iI1Illil(0x27a,'xiTh')]),/参加\[.*\].*-奖励/[iI1Illil(0x163,'(qFo')](III1i11l)&&(III1i11l=III1i11l[iI1Illil(0x133,'46p5')](/参加\[/g,'')[iI1Illil(0x1bd,'iF[)')](/\].*/g,'')),lIlIllI=lIlIllI[iI1Illil(0x148,'Aa@g')]('\x20')[0x1],Ill11lll[iI1Illil(0x14c,'(qFo')]({'time':lIlIllI,'channel':III1i11l,'detail':I1l1I1I1});}Ill11lll[iI1Illil(0x14d,'6GCI')]();const ill1llli=I1illIl1[iI1Illil(0x20f,'46p5')](liIIlIli,I1l1III);$[iI1Illil(0x175,'A)Md')][iI1Illil(0x13e,'E]je')]({'user':$[iI1Illil(0x15f,'OHj#')],'ie':ill1llli});}else!$[iI1Illil(0x1b3,'%jRx')]&&console[iI1Illil(0x23c,'RqwQ')](I1illIl1[iI1Illil(0x1de,'Ne@r')]);}catch(III1II1i){I1illIl1[iI1Illil(0x12b,'7%bW')](I1illIl1[iI1Illil(0x246,'*m5y')],I1illIl1[iI1Illil(0x153,'SwSF')])?console[iI1Illil(0x17d,'5Lth')](III1II1i[iI1Illil(0x134,'!C)T')]):i1iIi1i1[iI1Illil(0x284,'!C)T')]('❓'+IiIillil+'\x20'+iiIl1I1l[iI1Illil(0x169,'15G$')](llIlll1I));}}async function handleResponse(IIIIllil,lIl1i1lI){const il1iIiii=ii1Iiill,l1iI1l={'XnuZN':function(iiI1l1iI,i1l1iiI){return iiI1l1iI<i1l1iiI;},'VMjoy':function(i1i1illl,ii1I11Il){return i1i1illl!==ii1I11Il;},'xufXO':il1iIiii(0x1c7,'o6]d'),'UseNC':il1iIiii(0x15a,'qa99'),'Objor':il1iIiii(0x1bc,'j5L)'),'pesTW':function(i1lIl1il,llil1ll){return i1lIl1il===llil1ll;},'lIXMX':il1iIiii(0x21d,'PUn5'),'uEJWD':function(ill111il,il1il1){return ill111il===il1il1;},'zEfAe':il1iIiii(0x1d4,'RqwQ'),'vDIMy':il1iIiii(0x218,'SIpi'),'VDbZp':il1iIiii(0x25a,'7%bW'),'svDzg':il1iIiii(0x193,'70pE')};try{if(l1iI1l[il1iIiii(0x14f,'70pE')](l1iI1l[il1iIiii(0x1ef,'(qFo')],l1iI1l[il1iIiii(0x1ff,'pbb&')]))switch(IIIIllil){case l1iI1l[il1iIiii(0x1e0,'pbb&')]:if(l1iI1l[il1iIiii(0x238,'n@ZV')](lIl1i1lI[il1iIiii(0x1e5,'6GCI')],'0'))l1iI1l[il1iIiii(0x14f,'70pE')](l1iI1l[il1iIiii(0x19c,'l#fO')],l1iI1l[il1iIiii(0x19c,'l#fO')])?(Ii1i1Ii1[ii1I1lli[il1iIiii(0x1d5,'*mGM')]][il1iIiii(0x159,'n@ZV')]+=l1lI1iIi[il1iIiii(0x26d,'(qFo')],l1iI1l[il1iIiii(0x1d7,'h!TM')](new illliIil(i1lIi1i1[i1I1ilil[il1iIiii(0x1d5,'*mGM')]][il1iIiii(0x12a,'E]je')]),new ii1II1II(I1I1Ii1[il1iIiii(0x1a3,'EJ#p')]))&&(il1IIIii[li11llI1[il1iIiii(0x13b,'PQ2V')]][il1iIiii(0x290,'Aa@g')]=l1IlI1I[il1iIiii(0x260,'(qFo')])):$[il1iIiii(0x297,'cXVU')]=lIl1i1lI[il1iIiii(0x1ab,'EJ#p')];else l1iI1l[il1iIiii(0x162,'j5L)')](lIl1i1lI[il1iIiii(0x228,'n@ZV')],'1')?l1iI1l[il1iIiii(0x162,'j5L)')](l1iI1l[il1iIiii(0x1cb,'aAMo')],l1iI1l[il1iIiii(0x229,'xiTh')])?console[il1iIiii(0x16c,'*LTy')](l1iI1l[il1iIiii(0x141,'o6]d')]):l1iI1l1I[il1iIiii(0x14b,'HB%4')](il1iIiii(0x294,'HB%4')+iI111lil+il1iIiii(0x16f,'7%bW')+(i1i1lIi[il1iIiii(0x20e,'xGWD')]||i11IIlIl)):l1iI1l[il1iIiii(0x292,'PUn5')](l1iI1l[il1iIiii(0x22e,'5Lth')],l1iI1l[il1iIiii(0x21f,'Aa@g')])?I11IiilI[il11iI1I[il1iIiii(0x209,'LUh(')]]={...lIililIl}:console[il1iIiii(0x215,'6)RX')]('❓'+IIIIllil+'\x20'+JSON[il1iIiii(0x191,'EJ#p')](lIl1i1lI));break;}else Iii11i[il1iIiii(0x206,'wKgr')][il1iIiii(0x28b,'PUn5')](iIl1IIlI);}catch(ilIl1i1l){console[il1iIiii(0x17d,'5Lth')](il1iIiii(0x18a,'h!TM')+IIIIllil+il1iIiii(0x20c,'jPWR')+(ilIl1i1l[il1iIiii(0x1d9,'h!TM')]||ilIl1i1l));}}async function sendRequest(iiiIl1il){const l1Ii1iii=ii1Iiill,IlIIiIiI={'uCdnc':l1Ii1iii(0x27f,'o6]d'),'AZDZj':l1Ii1iii(0x1f6,'YvWC'),'OkmjN':function(II1lIiIi,llli1l1l){return II1lIiIi>llli1l1l;},'dTzDI':l1Ii1iii(0x1da,'OHj#'),'OsWaB':l1Ii1iii(0x181,'EJ#p'),'ZUrVQ':l1Ii1iii(0x15c,'QePL'),'vSHbT':l1Ii1iii(0x219,'6)RX'),'NWWpk':l1Ii1iii(0x234,'70pE'),'FfWMv':l1Ii1iii(0x280,'^n9K'),'HuJgz':l1Ii1iii(0x196,'Ne@r'),'gzaPu':l1Ii1iii(0x130,'fcp5'),'euTUy':l1Ii1iii(0x23a,'*m5y'),'XtseR':l1Ii1iii(0x244,'j5L)'),'aVYke':l1Ii1iii(0x276,'70pE'),'STItP':l1Ii1iii(0x1b1,'15G$'),'UOxEG':l1Ii1iii(0x194,'cXVU'),'AqGmd':function(lIlII111,i1li11l){return lIlII111===i1li11l;},'VAMyb':l1Ii1iii(0x263,'LUh('),'xyhOV':function(l1I11Ili,Il1I1ilI){return l1I11Ili!==Il1I1ilI;},'vlmVL':l1Ii1iii(0x131,'jPWR'),'mMorG':l1Ii1iii(0x269,'S6a]'),'vZqlc':l1Ii1iii(0x1f2,'wKgr'),'zKKFm':function(iIIiII1l,ilIilil){return iIIiII1l<ilIilil;},'qdvLF':function(lilI1lII,i11il1ii){return lilI1lII===i11il1ii;},'yqGLx':l1Ii1iii(0x13c,'%jRx'),'WwCJS':function(l1l1IIll,l1Illi11,I11I11ii){return l1l1IIll(l1Illi11,I11I11ii);},'Jerpf':function(IIlliill,li1lIili){return IIlliill>=li1lIili;},'cNxts':l1Ii1iii(0x24d,'EJ#p'),'jqMGH':l1Ii1iii(0x268,'j5L)')};if($[l1Ii1iii(0x21b,'*mGM')]||$[l1Ii1iii(0x1a7,'!C)T')])return;let I1111lII='',liII1iIi=null,iiIl1li=null,l1IIiIiI=IlIIiIiI[l1Ii1iii(0x28d,'l#fO')],IIi1iIil={};switch(iiiIl1il){case IlIIiIiI[l1Ii1iii(0x231,'EJ#p')]:I1111lII=IlIIiIiI[l1Ii1iii(0x1fd,'n@ZV')],iiIl1li={'functionId':IlIIiIiI[l1Ii1iii(0x17a,'%jRx')]},IIi1iIil={'pageSize':'20','page':$[l1Ii1iii(0x273,'S6a]')]},liII1iIi=common[l1Ii1iii(0x293,'aAMo')](await common[l1Ii1iii(0x154,'EGbm')](IlIIiIiI[l1Ii1iii(0x1b8,'O8DT')],IIi1iIil));break;default:console[l1Ii1iii(0x1d1,'iF[)')](l1Ii1iii(0x27e,'E]je')+iiiIl1il);return;}const Iii1iIi={'url':I1111lII,'method':l1IIiIiI,'headers':{'Accept':IlIIiIiI[l1Ii1iii(0x1df,'xiTh')],'Accept-Encoding':IlIIiIiI[l1Ii1iii(0x1ac,'7%bW')],'Accept-Language':IlIIiIiI[l1Ii1iii(0x233,'SIpi')],'Connection':IlIIiIiI[l1Ii1iii(0x24a,'RqwQ')],'Content-Type':IlIIiIiI[l1Ii1iii(0x1f1,'Aa@g')],'J-E-H':$[l1Ii1iii(0x21e,'O8DT')],'J-E-C':$[l1Ii1iii(0x200,'7%bW')],'Host':IlIIiIiI[l1Ii1iii(0x208,'OHj#')],'Cookie':cookie,'Origin':IlIIiIiI[l1Ii1iii(0x267,'cXVU')],'Sec-Fetch-Dest':IlIIiIiI[l1Ii1iii(0x248,'KR#!')],'Sec-Fetch-Mode':IlIIiIiI[l1Ii1iii(0x25e,'Q5iJ')],'Sec-Fetch-Site':IlIIiIiI[l1Ii1iii(0x167,'*mGM')],'User-Agent':$['UA']},'params':iiIl1li,'data':liII1iIi,'timeout':0x7530};if(IlIIiIiI[l1Ii1iii(0x1e3,'h!TM')](l1IIiIiI,IlIIiIiI[l1Ii1iii(0x1c5,'*mGM')])){if(IlIIiIiI[l1Ii1iii(0x220,'xiTh')](IlIIiIiI[l1Ii1iii(0x266,'xiTh')],IlIIiIiI[l1Ii1iii(0x140,'qa99')]))delete Iii1iIi[l1Ii1iii(0x13d,'%jRx')],delete Iii1iIi[l1Ii1iii(0x1e4,'EJ#p')][IlIIiIiI[l1Ii1iii(0x16e,'EGbm')]];else{const iIl11l11=new lIliIiiI({'title':IiIIlIli+l1Ii1iii(0x1cf,'EGbm'),'columns':[{'title':'用户','name':IlIIiIiI[l1Ii1iii(0x15d,'pbb&')],'alignment':IlIIiIiI[l1Ii1iii(0x12d,'(qFo')]},{'title':'总计','name':'ie','alignment':IlIIiIiI[l1Ii1iii(0x1c4,'KR#!')]}]});for(const I1IiI1I1 of llllili1[l1Ii1iii(0x1ad,'E]je')]){let {user:iI111II,ie:lIll1il}=I1IiI1I1;iIl11l11[l1Ii1iii(0x12f,'YvWC')]({'user':iI111II,'ie':IlIIiIiI[l1Ii1iii(0x214,'n@ZV')](lIll1il,0x0)?'+'+lIll1il:''+lIll1il});}i1li11I[l1Ii1iii(0x242,'n@ZV')]('\x0a'),iIl11l11[l1Ii1iii(0x174,'O8DT')]();}}const IlII1lI1=0x1;let il1ili1=0x0,illIIl1l=null,lliIilIl=![];while(IlIIiIiI[l1Ii1iii(0x15b,'6)RX')](il1ili1,IlII1lI1)){IlIIiIiI[l1Ii1iii(0x214,'n@ZV')](il1ili1,0x0)&&await $[l1Ii1iii(0x137,'!C)T')](0x3e8);const i1ilIlll=await common[l1Ii1iii(0x14e,'*LTy')](Iii1iIi);if(!i1ilIlll[l1Ii1iii(0x15e,'^n9K')]){illIIl1l=l1Ii1iii(0x1af,'n@ZV')+iiiIl1il+l1Ii1iii(0x23d,'jPWR')+i1ilIlll[l1Ii1iii(0x186,'*m5y')],il1ili1++;i1ilIlll[l1Ii1iii(0x210,'HB%4')]&&IlIIiIiI[l1Ii1iii(0x24b,'SIpi')](i1ilIlll[l1Ii1iii(0x210,'HB%4')],0x193)&&(IlIIiIiI[l1Ii1iii(0x1d3,'^n9K')](IlIIiIiI[l1Ii1iii(0x201,'46p5')],IlIIiIiI[l1Ii1iii(0x259,'15G$')])?Il1IlIi[l1Ii1iii(0x1dc,'fcp5')]=!![]:$[l1Ii1iii(0x23b,'cXVU')]=!![]);continue;}if(!i1ilIlll[l1Ii1iii(0x217,'7R4Y')]){illIIl1l=l1Ii1iii(0x17b,'l#fO')+iiiIl1il+l1Ii1iii(0x1a6,'xGWD'),il1ili1++;continue;}await IlIIiIiI[l1Ii1iii(0x288,'PQ2V')](handleResponse,iiiIl1il,i1ilIlll[l1Ii1iii(0x178,'fcp5')]),lliIilIl=![];break;}IlIIiIiI[l1Ii1iii(0x179,'RqwQ')](il1ili1,IlII1lI1)&&(console[l1Ii1iii(0x1c0,'^n9K')](illIIl1l),lliIilIl&&(IlIIiIiI[l1Ii1iii(0x1a9,'EGbm')](IlIIiIiI[l1Ii1iii(0x18d,'QePL')],IlIIiIiI[l1Ii1iii(0x1ba,'OHj#')])?($[l1Ii1iii(0x151,'*LTy')]=!![],$[l1Ii1iii(0x204,'PUn5')]&&$[l1Ii1iii(0x25f,'fcp5')][l1Ii1iii(0x156,'5Lth')](illIIl1l)):(lII1i1l1[l1Ii1iii(0x264,'xGWD')](IIilI11i),liIili1&&(llIIil1I[l1Ii1iii(0x1e8,'jPWR')]=!![],I1I11l1l[l1Ii1iii(0x1fa,'iF[)')]&&illl11Il[l1Ii1iii(0x139,'qa99')][l1Ii1iii(0x296,'fcp5')](lIIllI1l)))));}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }