

function func() {
    localStorage.setItem('id','func()')




    document.getElementById('menu').classList.add('sceney')
    setTimeout(function () {
        document.getElementById('menu').setAttribute('class', 'fa fa-times')
        document.getElementById('menu').setAttribute('onclick', 'cnuf()')
        document.getElementById('menu').classList.remove('sceney')

        document.getElementById(`scene`).style.width = '600px';
        document.getElementById('scene').style.height = '400px';
        document.getElementById('scene').style.transform = 'translateX(100px)'
        document.getElementById('scene').style.bottom = '100px'
        document.getElementById('scene').style.fontSize='10px'


        
        document.getElementById('scene2').style.width = '600px';
        document.getElementById('scene2').style.height = '400px';
        document.getElementById('scene2').style.transform = 'translateX(122px)'
        document.getElementById('scene2').style.bottom = '80px'
        document.getElementById('scene2').style.fontSize='10px'


        
        document.getElementById('scene3').style.width = '600px';
        document.getElementById('scene3').style.height = '400px';
        document.getElementById('scene3').style.transform = 'translateX(142px)'
        document.getElementById('scene3').style.bottom = '60px'
        document.getElementById('scene3').style.fontSize='10px'


        
        document.getElementById('scene4').style.width = '600px';
        document.getElementById('scene4').style.height = '400px';
        document.getElementById('scene4').style.transform = 'translateX(162px)'
        document.getElementById('scene4').style.bottom = '40px'
        document.getElementById('scene4').style.fontSize='10px'


        document.getElementById('white').style.width='150px'
        document.getElementById('white').style.lineHeight='20px'
        document.getElementById('white').style.transform='translateY(170px)'
        document.getElementById('box1').style.display='block'




    }, 300)






}

function cnuf() {
    var m=localStorage.getItem('id')


    document.getElementById('menu').classList.add('sceney')

    setTimeout(function () {


        document.getElementById('menu').setAttribute('class', 'fa fa-bars')
        document.getElementById('menu').setAttribute('onclick', m)
       
        document.getElementById('scene').classList.add('scenery')
        document.getElementById('scene').style.width = '1366px';
        document.getElementById('scene').style.height = '910px';
        document.getElementById('scene').style.transform = 'translateX(0px)'
        document.getElementById('scene').style.bottom = '-357px'
        document.getElementById('scene').style.fontSize='2vw'


        document.getElementById('scene2').style.width = '1366px';
        document.getElementById('scene2').style.height = '910px';
        document.getElementById('scene2').style.transform = 'translateX(0px)'
        document.getElementById('scene2').style.bottom = '-357px'
        document.getElementById('scene2').style.fontSize='2vw'


        
        document.getElementById('scene3').style.width = '1366px';
        document.getElementById('scene3').style.height = '910px';
        document.getElementById('scene3').style.transform = 'translateX(0px)'
        document.getElementById('scene3').style.bottom = '-357px'
        document.getElementById('scene3').style.fontSize='2vw'

        document.getElementById('scene4').style.width = '1366px';
        document.getElementById('scene4').style.height = '910px';
        document.getElementById('scene4').style.transform = 'translateX(0px)'
        document.getElementById('scene4').style.bottom = '-357px'
        document.getElementById('scene4').style.fontSize='2vw'

        document.getElementById('white').style.width='300px'
        document.getElementById('white').style.lineHeight='50px'
        document.getElementById('white').style.transform='translateY(200px)'
        document.getElementById('box1').style.display='none'

    


    }, 300)




}

function change1(){
    localStorage.setItem('id','func3()')
   


   
    document.getElementById('scene2').style.zIndex=2
    document.getElementById('scene').style.zIndex=1
    document.getElementById('scene3').style.zIndex=-1

    document.getElementById('scene4').style.zIndex=-2



    document.getElementById('scene2').style.height = '400px';
        document.getElementById('scene2').style.transform = 'translateX(100px)'
        document.getElementById('scene2').style.bottom = '100px'
        document.getElementById('scene2').style.fontSize='10px'


        
        document.getElementById('scene').style.width = '600px';
        document.getElementById('scene').style.height = '400px';
        document.getElementById('scene').style.transform = 'translateX(122px)'
        document.getElementById('scene').style.bottom = '80px'
        document.getElementById('scene2').style.fontSize='10px'


        
        document.getElementById('scene3').style.width = '600px';
        document.getElementById('scene3').style.height = '400px';
        document.getElementById('scene3').style.transform = 'translateX(142px)'
        document.getElementById('scene3').style.bottom = '60px'
        document.getElementById('scene3').style.fontSize='10px'


        
        document.getElementById('scene4').style.width = '600px';
        document.getElementById('scene4').style.height = '400px';
        document.getElementById('scene4').style.transform = 'translateX(162px)'
        document.getElementById('scene4').style.bottom = '40px'
        document.getElementById('scene4').style.fontSize='10px'
    

    
  

}
function change2(){
  localStorage.setItem('id','func2()')
    document.getElementById('scene2').style.zIndex=1
    document.getElementById('scene').style.zIndex=-1
    document.getElementById('scene3').style.zIndex=2

    document.getElementById('scene4').style.zIndex=-2



    document.getElementById('scene3').style.height = '400px';
        document.getElementById('scene3').style.transform = 'translateX(100px)'
        document.getElementById('scene3').style.bottom = '100px'
        document.getElementById('scene3').style.fontSize='10px'


        
        document.getElementById('scene2').style.width = '600px';
        document.getElementById('scene2').style.height = '400px';
        document.getElementById('scene2').style.transform = 'translateX(122px)'
        document.getElementById('scene2').style.bottom = '80px'
        document.getElementById('scene2').style.fontSize='10px'


        
        document.getElementById('scene').style.width = '600px';
        document.getElementById('scene').style.height = '400px';
        document.getElementById('scene').style.transform = 'translateX(142px)'
        document.getElementById('scene').style.bottom = '60px'
        document.getElementById('scene').style.fontSize='10px'


        
        document.getElementById('scene4').style.width = '600px';
        document.getElementById('scene4').style.height = '400px';
        document.getElementById('scene4').style.transform = 'translateX(162px)'
        document.getElementById('scene4').style.bottom = '40px'
        document.getElementById('scene4').style.fontSize='10px'
}
function home(){
    localStorage.setItem('id','homeo()')

    document.getElementById('scene2').style.zIndex=1
    document.getElementById('scene').style.zIndex=2
    document.getElementById('scene3').style.zIndex=-1

    document.getElementById('scene4').style.zIndex=-2

    document.getElementById('scene').style.width = '600px';
    document.getElementById('scene').style.height = '400px';
    document.getElementById('scene').style.transform = 'translateX(100px)'
    document.getElementById('scene').style.bottom = '100px'
    document.getElementById('scene').style.fontSize='10px'


    
    document.getElementById('scene2').style.width = '600px';
    document.getElementById('scene2').style.height = '400px';
    document.getElementById('scene2').style.transform = 'translateX(122px)'
    document.getElementById('scene2').style.bottom = '80px'
    document.getElementById('scene2').style.fontSize='10px'


    
    document.getElementById('scene3').style.width = '600px';
    document.getElementById('scene3').style.height = '400px';
    document.getElementById('scene3').style.transform = 'translateX(142px)'
    document.getElementById('scene3').style.bottom = '60px'
    document.getElementById('scene3').style.fontSize='10px'


    
    document.getElementById('scene4').style.width = '600px';
    document.getElementById('scene4').style.height = '400px';
    document.getElementById('scene4').style.transform = 'translateX(162px)'
    document.getElementById('scene4').style.bottom = '40px'
    document.getElementById('scene4').style.fontSize='10px'

}
function change3(){
    localStorage.clear()
        localStorage.setItem('id','func4()')
    document.getElementById('scene2').style.zIndex=1
    document.getElementById('scene').style.zIndex=-2
    document.getElementById('scene3').style.zIndex=-1

    document.getElementById('scene4').style.zIndex=2

    document.getElementById('scene4').style.width = '600px';
    document.getElementById('scene4').style.height = '400px';
    document.getElementById('scene4').style.transform = 'translateX(100px)'
    document.getElementById('scene4').style.bottom = '100px'
    document.getElementById('scene4').style.fontSize='10px'


    
    document.getElementById('scene2').style.width = '600px';
    document.getElementById('scene2').style.height = '400px';
    document.getElementById('scene2').style.transform = 'translateX(122px)'
    document.getElementById('scene2').style.bottom = '80px'
    document.getElementById('scene2').style.fontSize='10px'


    
    document.getElementById('scene3').style.width = '600px';
    document.getElementById('scene3').style.height = '400px';
    document.getElementById('scene3').style.transform = 'translateX(142px)'
    document.getElementById('scene3').style.bottom = '60px'
    document.getElementById('scene3').style.fontSize='10px'


    
    document.getElementById('scene').style.width = '600px';
    document.getElementById('scene').style.height = '400px';
    document.getElementById('scene').style.transform = 'translateX(162px)'
    document.getElementById('scene').style.bottom = '40px'
    document.getElementById('scene').style.fontSize='10px'
       

}


function func2() {
    localStorage.clear()
    localStorage.setItem('id','func2()')


    document.getElementById('menu').classList.add('sceney')
    setTimeout(function () {
        document.getElementById('menu').setAttribute('class', 'fa fa-times')
        document.getElementById('menu').setAttribute('onclick', 'cnuf()')
        document.getElementById('menu').classList.remove('sceney')

        document.getElementById(`scene3`).style.width = '600px';
        document.getElementById('scene3').style.height = '400px';
        document.getElementById('scene3').style.transform = 'translateX(100px)'
        document.getElementById('scene3').style.bottom = '100px'
        document.getElementById('scene3').style.fontSize='10px'


        
        document.getElementById('scene2').style.width = '600px';
        document.getElementById('scene2').style.height = '400px';
        document.getElementById('scene2').style.transform = 'translateX(122px)'
        document.getElementById('scene2').style.bottom = '80px'
        document.getElementById('scene2').style.fontSize='10px'


        
        document.getElementById('scene').style.width = '600px';
        document.getElementById('scene').style.height = '400px';
        document.getElementById('scene').style.transform = 'translateX(142px)'
        document.getElementById('scene').style.bottom = '60px'
        document.getElementById('scene').style.fontSize='10px'


        
        document.getElementById('scene4').style.width = '600px';
        document.getElementById('scene4').style.height = '400px';
        document.getElementById('scene4').style.transform = 'translateX(162px)'
        document.getElementById('scene4').style.bottom = '40px'
        document.getElementById('scene4').style.fontSize='10px'


        document.getElementById('white').style.width='150px'
        document.getElementById('white').style.lineHeight='20px'
        document.getElementById('white').style.transform='translateY(170px)'
        document.getElementById('box1').style.display='block'




    }, 300)}
    function func3() {
        localStorage.clear()
        localStorage.setItem('id','func3()')
    
    
        document.getElementById('menu').classList.add('sceney')
        setTimeout(function () {
            document.getElementById('menu').setAttribute('class', 'fa fa-times')
            document.getElementById('menu').setAttribute('onclick', 'cnuf()')
            document.getElementById('menu').classList.remove('sceney')
    
            document.getElementById(`scene2`).style.width = '600px';
            document.getElementById('scene2').style.height = '400px';
            document.getElementById('scene2').style.transform = 'translateX(100px)'
            document.getElementById('scene2').style.bottom = '100px'
            document.getElementById('scene2').style.fontSize='10px'
    
    
            
            document.getElementById('scene').style.width = '600px';
            document.getElementById('scene').style.height = '400px';
            document.getElementById('scene').style.transform = 'translateX(122px)'
            document.getElementById('scene').style.bottom = '80px'
            document.getElementById('scene').style.fontSize='10px'
    
    
            
            document.getElementById('scene3').style.width = '600px';
            document.getElementById('scene3').style.height = '400px';
            document.getElementById('scene3').style.transform = 'translateX(142px)'
            document.getElementById('scene3').style.bottom = '60px'
            document.getElementById('scene3').style.fontSize='10px'
    
    
            
            document.getElementById('scene4').style.width = '600px';
            document.getElementById('scene4').style.height = '400px';
            document.getElementById('scene4').style.transform = 'translateX(162px)'
            document.getElementById('scene4').style.bottom = '40px'
            document.getElementById('scene4').style.fontSize='10px'
    
    
            document.getElementById('white').style.width='150px'
            document.getElementById('white').style.lineHeight='20px'
            document.getElementById('white').style.transform='translateY(170px)'
            document.getElementById('box1').style.display='block'
    
    
    
    
        }, 300)}
        function homeo(){
            
                localStorage.clear()
                localStorage.setItem('id','homeo()')
            
            
                document.getElementById('menu').classList.add('sceney')
                setTimeout(function () {
                    document.getElementById('menu').setAttribute('class', 'fa fa-times')
                    document.getElementById('menu').setAttribute('onclick', 'cnuf()')
                    document.getElementById('menu').classList.remove('sceney')
            
                    document.getElementById(`scene`).style.width = '600px';
                    document.getElementById('scene').style.height = '400px';
                    document.getElementById('scene').style.transform = 'translateX(100px)'
                    document.getElementById('scene').style.bottom = '100px'
                    document.getElementById('scene').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene2').style.width = '600px';
                    document.getElementById('scene2').style.height = '400px';
                    document.getElementById('scene2').style.transform = 'translateX(122px)'
                    document.getElementById('scene2').style.bottom = '80px'
                    document.getElementById('scene2').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene3').style.width = '600px';
                    document.getElementById('scene3').style.height = '400px';
                    document.getElementById('scene3').style.transform = 'translateX(142px)'
                    document.getElementById('scene3').style.bottom = '60px'
                    document.getElementById('scene3').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene4').style.width = '600px';
                    document.getElementById('scene4').style.height = '400px';
                    document.getElementById('scene4').style.transform = 'translateX(162px)'
                    document.getElementById('scene4').style.bottom = '40px'
                    document.getElementById('scene4').style.fontSize='10px'
            
            
                    document.getElementById('white').style.width='150px'
                    document.getElementById('white').style.lineHeight='20px'
                    document.getElementById('white').style.transform='translateY(170px)'
                    document.getElementById('box1').style.display='block'
            
            
            
            
                }, 300)
        }
        function func4(){
         
            
                localStorage.clear()
                localStorage.setItem('id','func4()')
            
            
                document.getElementById('menu').classList.add('sceney')
                setTimeout(function () {
                    document.getElementById('menu').setAttribute('class', 'fa fa-times')
                    document.getElementById('menu').setAttribute('onclick', 'cnuf()')
                    document.getElementById('menu').classList.remove('sceney')
            
                    document.getElementById(`scene4`).style.width = '600px';
                    document.getElementById('scene4').style.height = '400px';
                    document.getElementById('scene4').style.transform = 'translateX(100px)'
                    document.getElementById('scene4').style.bottom = '100px'
                    document.getElementById('scene4').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene2').style.width = '600px';
                    document.getElementById('scene2').style.height = '400px';
                    document.getElementById('scene2').style.transform = 'translateX(122px)'
                    document.getElementById('scene2').style.bottom = '80px'
                    document.getElementById('scene2').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene3').style.width = '600px';
                    document.getElementById('scene3').style.height = '400px';
                    document.getElementById('scene3').style.transform = 'translateX(142px)'
                    document.getElementById('scene3').style.bottom = '60px'
                    document.getElementById('scene3').style.fontSize='10px'
            
            
                    
                    document.getElementById('scene').style.width = '600px';
                    document.getElementById('scene').style.height = '400px';
                    document.getElementById('scene').style.transform = 'translateX(162px)'
                    document.getElementById('scene').style.bottom = '40px'
                    document.getElementById('scene').style.fontSize='10px'
            
            
                    document.getElementById('white').style.width='150px'
                    document.getElementById('white').style.lineHeight='20px'
                    document.getElementById('white').style.transform='translateY(170px)'
                    document.getElementById('box1').style.display='block'
            
            
            
            
                }, 300)

        }
        function next(){
           document.getElementById('bookes').style.zIndex="3"
           document.getElementById('booko').style.zIndex="3"
        }
        function back(){
            document.getElementById('bookes').style.zIndex="-3"
            document.getElementById('booko').style.zIndex="-3"
         }


         function myFunction(x) {
            if (x.matches) { // If media query matches
             alert('please use computer or laptop ')
             window.location="www.google.com"
            } else {
                console.log('hello')
            }
          }
          
          var x = window.matchMedia("(max-width: 900px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes