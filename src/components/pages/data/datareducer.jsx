export const biofunc = (pagedata) => {
	pagedata.bioref.current.classList.add('active_page');
	pagedata.edref.current.classList.add('remove');
	pagedata.edref.current.classList.remove('active_page');
	pagedata.projref.current.classList.add('remove');
	pagedata.projref.current.classList.remove('active_page');
	pagedata.vidref.current.classList.add('remove');
	pagedata.vidref.current.classList.remove('active_page');
	pagedata.expref.current.classList.add('remove');
	pagedata.expref.current.classList.remove('active_page');
	pagedata.intref.current.classList.add('remove');
	pagedata.intref.current.classList.remove('active_page');
};
export const edfunc = (pagedata) => {
	pagedata.bioref.current.classList.remove('active_page');
	pagedata.bioref.current.classList.add('remove');
	pagedata.edref.current.classList.add('active_page');
	pagedata.projref.current.classList.add('remove');
	pagedata.projref.current.classList.remove('active_page');
	pagedata.vidref.current.classList.add('remove');
	pagedata.vidref.current.classList.remove('active_page');
	pagedata.expref.current.classList.add('remove');
	pagedata.expref.current.classList.remove('active_page');
	pagedata.intref.current.classList.add('remove');
	pagedata.intref.current.classList.remove('active_page');
};
export const projfunc = (pagedata) => {
	pagedata.bioref.current.classList.remove('active_page');
	pagedata.bioref.current.classList.add('remove');
	pagedata.edref.current.classList.add('remove');
	pagedata.edref.current.classList.remove('active_page');
	pagedata.projref.current.classList.add('active_page');
	pagedata.vidref.current.classList.add('remove');
	pagedata.vidref.current.classList.remove('active_page');
	pagedata.expref.current.classList.add('remove');
	pagedata.expref.current.classList.remove('active_page');
	pagedata.intref.current.classList.add('remove');
	pagedata.intref.current.classList.remove('active_page');
};
export const vidfunc = (pagedata) => {
	pagedata.bioref.current.classList.remove('active_page');
	pagedata.bioref.current.classList.add('remove');
	pagedata.edref.current.classList.add('remove');
	pagedata.edref.current.classList.remove('active_page');
	pagedata.projref.current.classList.remove('active_page');
	pagedata.projref.current.classList.add('remove');
	pagedata.vidref.current.classList.add('active_page');
	pagedata.expref.current.classList.add('remove');
	pagedata.expref.current.classList.remove('active_page');
	pagedata.intref.current.classList.add('remove');
	pagedata.intref.current.classList.remove('active_page');
};
export const expfunc = (pagedata) => {
	pagedata.bioref.current.classList.remove('active_page');
	pagedata.bioref.current.classList.add('remove');
	pagedata.edref.current.classList.add('remove');
	pagedata.edref.current.classList.remove('active_page');
	pagedata.projref.current.classList.add('remove');
	pagedata.projref.current.classList.remove('active_page');
	pagedata.vidref.current.classList.add('remove');
	pagedata.vidref.current.classList.remove('active_page');
	pagedata.expref.current.classList.add('active_page');
	pagedata.intref.current.classList.add('remove');
	pagedata.intref.current.classList.remove('active_page');
};
export const intfunc = (pagedata) => {
	pagedata.bioref.current.classList.remove('active_page');
	pagedata.bioref.current.classList.add('remove');
	pagedata.edref.current.classList.add('remove');
	pagedata.edref.current.classList.remove('active_page');
	pagedata.projref.current.classList.add('remove');
	pagedata.projref.current.classList.remove('active_page');
	pagedata.vidref.current.classList.add('remove');
	pagedata.vidref.current.classList.remove('active_page');
	pagedata.expref.current.classList.add('remove');
	pagedata.expref.current.classList.remove('active_page');
	pagedata.intref.current.classList.add('active_page');
};