$(document).ready(function() {
			
			$(".tigger").mouseover(function (){  
                      
					  $("#juanzengfont").html("有一点小激动！");
					  $(".tigger").css({"background-color":"#F88E8B","transition": "background-color 0.5s"});  
              }).mouseout (function(){  
                   $("#juanzengfont").html("捐赠与支持！");
					 $(".tigger").css("background-color","#393D49");   
            });  
			
			
			var t9 = new PopupLayer({trigger:"#ele9",popupBlk:"#blk9",closeBtn:"#close9",useOverlay:true,useFx:true,
				offsets:{
					x:0,
					y:-41
				}
			});
			t9.doEffects = function(way){
				if(way == "open"){
					this.popupLayer.css({width:'100px',height:'70px'});
					this.popupLayer.css({opacity:0.3}).show(400,function(){
						this.popupLayer.animate({
							left:($(document).width() - 820)/2,
							top:(document.documentElement.clientHeight - 800)/2 + $(document).scrollTop(),
							opacity:0.8,
							width: '820px',
							height: '800px'
						},1000,function(){this.popupLayer.css("opacity",1)}.binding(this));
					}.binding(this));
				}
				else{
					this.popupLayer.animate({
						left:this.trigger.offset().left,
						top:this.trigger.offset().top,
						opacity:0.1,
						width: '100px',
						height: '70px'
					},{duration:500,complete:function(){this.popupLayer.css("opacity",1);this.popupLayer.hide();this.popupLayer.css({width:'820px',height:'800px'});}.binding(this)});
				}
			}
		});