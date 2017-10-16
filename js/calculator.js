function _(x) {
	return document.getElementById(x);
}

function calc(val) {
	_('screen').value += val;
}

function c(val) {
	_('screen').value = '';
}

function equal(val) {
	_('screen').value = eval(_('screen').value);
}