(function($){
	$.fn.textBoxUpperCase = function(){
		$this = (this);
		$this.keyup(function(){
			$this.val($this.val().toUpperCase());
		});
	};

	$.fn.numbersOnly = function(){
		$this = (this);
		$this.keypress(function(event){
			if (!(event.keyCode > 47 && event.keyCode < 57)){
				return false;
			}

		});
	};
}(jQuery));

$('.txtbx').numbersOnly();