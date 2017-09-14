var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});


$(function(){
	//首页滚动
	var newli=$('.ind-volume li').eq(0).clone();
	var roll=$('.ind-volume ul');
	roll.append(newli);
	var len=$('.ind-volume li').length-1;
	var j=0;
	var stop=0.3*len
	function time(){
		j-=0.01;
		if(j<=-stop){
			j=0;
		}
		roll.css('top',j+'rem');
	}
	setInterval(time,100);
//账户充值提现
	$('.account .in').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.head h3').html('充值');
		$('.account .formIn').show();
		$('.account .formOut').hide();
	})
	$('.account .out').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.head h3').html('提现');
		$('.account .formOut').show();
		$('.account .formIn').hide();
	})
	
	//我要投资
	$('.invest-tab a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//投资详情
	$('.detail-tab a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})


