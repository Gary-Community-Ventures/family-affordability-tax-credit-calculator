type WhiteLabels =
	| 'gac'
	| 'pueblo_united_way'
	| 'dabc'
	| 'alg'
	| 'servicios'
	| 'jeffco'
	| 'adams'
	| 'arapahoe';

export const WHITE_LABELS: WhiteLabels[] = [
	'gac',
	'pueblo_united_way',
	'dabc',
	'alg',
	'servicios',
	'jeffco',
	'adams',
	'arapahoe'
];

type Colors = {
	primary: string;
	secondary: string;
	headerColor?: string;
};

export const WHITE_LABEL_COLORS: {
	[key: string]: Colors | undefined;
	_default: Colors;
} = {
	_default: {
		primary: '#264e5e',
		secondary: '#9dcdc9'
	},
	gac: {
		primary: '#264e5e',
		secondary: '#9dcdc9'
	},
	pueblo_united_way: {
		primary: '#273f79',
		secondary: '#f29a38'
	},
	dabc: {
		primary: '#2d71b7',
		secondary: '#408f4e',
		headerColor: '#ffffff'
	},
	alg: {
		primary: '#e75245',
		secondary: '#e08f33',
		headerColor: '#000000'
	},
	servicios: {
		primary: '#7c2f35',
		secondary: '#e39d50'
	},
	jeffco: {
		primary: '#597827',
		secondary: '#495856',
		headerColor: '#ffffff'
	},
	adams: {
		primary: '#2a6438',
		secondary: '#296695',
		headerColor: '#ffffff'
	},
	arapahoe: {
		primary: '#a5243b',
		secondary: '#22355b',
		headerColor: '#ffffff'
	}
};

type Links = {
	fileOnline: string;
	fileInPerson: string;
	paidFiling: string;
};

export const WHITE_LABEL_LINKS: {
	[key: string]: Links | undefined;
	_default: Links;
} = {
	_default: {
		fileOnline: 'https://myfreetaxes.com/',
		fileInPerson: 'https://taxhelpco.org/get-free-tax-help/find-a-free-tax-site/',
		paidFiling: 'https://co.myfriendben.org/paid-tax-filing-options/'
	},
	gac: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=get_ahead&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=get_ahead&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=get_ahead&utm_term=english&utm_content=mfb_page'
	},
	pueblo_united_way: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=pueblo_united_way&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=pueblo_united_way&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=pueblo_united_way&utm_term=english&utm_content=mfb_page'
	},
	dabc: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=dabc&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=dabc&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=dabc&utm_term=english&utm_content=mfb_page'
	},
	alg: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=alg&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=alg&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=alg&utm_term=english&utm_content=mfb_page'
	},
	servicios: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=servicios&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=servicios&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=servicios&utm_term=english&utm_content=mfb_page'
	},
	jeffco: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=jeffco&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=jeffco&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=jeffco&utm_term=english&utm_content=mfb_page'
	},
	adams: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=adams&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=adams&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=adams&utm_term=english&utm_content=mfb_page'
	},
	arapahoe: {
		fileOnline:
			'https://myfreetaxes.com/?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=arapahoe&utm_term=english&utm_content=myfreetaxes',
		fileInPerson:
			'https://www.getaheadcolorado.org/fileinperson?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=arapahoe&utm_term=english&utm_content=gac_file_in_person',
		paidFiling:
			'https://co.myfriendben.org/paid-tax-filing-options/?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=arapahoe&utm_term=english&utm_content=mfb_page'
	}
};
