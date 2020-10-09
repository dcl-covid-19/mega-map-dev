export const dayAny = 7

export const weekdays = [
  { day: 'any', pos: dayAny },
  { day: 'monday', pos: 1 },
  { day: 'tuesday', pos: 2 },
  { day: 'wednesday', pos: 3 },
  { day: 'thursday', pos: 4 },
  { day: 'friday', pos: 5 },
  { day: 'saturday', pos: 6 },
  { day: 'sunday', pos: 0 }
]

export const weekdaysJs = [
  { day: 'sunday' },
  { day: 'monday' },
  { day: 'tuesday' },
  { day: 'wednesday' },
  { day: 'thursday' },
  { day: 'friday' },
  { day: 'saturday' }
]

export const weekdayHours = [
  { day: 'sunday' },
  { day: 'monday' },
  { day: 'tuesday' },
  { day: 'wednesday' },
  { day: 'thursday' },
  { day: 'friday' },
  { day: 'saturday' }
]

export const openStreetMapAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
export const mapBoxAttribution =
  '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://carto.com/attribution">CARTO</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'

export const dayFilters = ['sun', 'mon', 'tues', 'wed', 'thr', 'fri', 'sat'].map((attr) => `${attr}`)
export const seniorDayFilters = ['sun', 'mon', 'tues', 'wed', 'thr', 'fri', 'sat'].map((attr) => `sp_${attr}`)

export const booleanFilters = [
  'pay_at_pickup',
  'curbside_pickup',
  'special_hours',
  'meal_student',
  'meal_public',
  'family_meal',
  'pay_phone',
  'pay_online',
  'must_preorder',
  'discount_medical',
  'delivery',
  'free_produce',
  'free_groceries',
  'farm_pick_up',
  'farmers_market',
  'free',
  'wic',
  'snap',
  'call_in_advance',
  'seniors',
  'children',
  'public',
  'telehealth',
  'in_person',
  'legal_criminal',
  'legal_domviolence',
  'legal_worker_protection',
  'legal_healthcare',
  'legal_housing',
  'legal_immigration',
  'require_child',
  'must_show_id',
  'all_children',
  'med_testing',
  'med_primary_care',
  'med_pediatrics',
  'med_senior',
  'med_women',
  'med_urgent_care',
  'med_dental',
  'med_vision',
  'med_pharmacy',
  'med_mental_health',
  'med_hotline',
  'med_addiction',
  'med_domestic_violence',
  'ballet_outdoor',
  'ballet_indoor'
]

// Combination of boolean filters
export const complexFilters = [
  { name: 'curbside_or_delivery', columns: ['curbside_pickup', 'delivery'], combine: ([a, b]) => a || b },
  { name: 'safe_pick_up', columns: ['curbside_pickup', 'delivery'], combine: ([a, b]) => a || b }
]

// CARTO DB VARIABLES
export const cartoBaseURL =
  // 'https://mfincker.carto.com/api/v2/sql?api_key=' + process.env.VUE_APP_CARTO_API_KEY
  'https://dcl-mega-map.carto.com/api/v2/sql?'

export const cartoDBName = 'airtable'

export const zipDBName = 'zipcode_db'

export const needs = [
  'free_grocery',
  'meal',
  'free_food',
  'snap_wic_retailer',
  'legal_assistance',
  'health',
  'mental_health',
  'school_meal'
]

export const needsWithGeoFilter = ['legal_assistance', 'health', 'mental_health']

export const sqlQueries = {
  free_grocery: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'grocery' AND free = 1 AND status = 1",
  meal: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'meal' AND status = '1'",
  school_meal: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'meal' AND meal_student = 1 AND status = 1",
  free_food: 'SELECT * FROM ' + cartoDBName + " WHERE resource IN ('grocery', 'meal') AND free = 1 AND meal_student = 0 AND status = 1",
  snap_wic_retailer: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'grocery' AND free = 0 AND status = 1",
  // legal_general_info: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'legal_general_info'",
  legal_assistance: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'legal' AND status = 1",
  // medical: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'medical' AND status = 1",
  mental_health: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'mental_health' AND med_mental_health = 1 AND status = 1",
  health: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'health' AND status = 1"
  // ballot_drop: 'SELECT * FROM ' + cartoDBName + " WHERE resource = 'ballot_drop' AND status = 1",
}

export const zipQuery = 'SELECT * FROM ' + zipDBName + ' WHERE zip = '

export const countyLatLon = {
  anywhere: { lat: 37.594, lon: -122.223, zoom: 8 },
  alameda: { lat: 37.8097, lon: -122.25328, zoom: 10 },
  contra_costa: { lat: 37.897914, lon: -122.070408, zoom: 10 },
  marin: { lat: 38.0319, lon: -122.665367, zoom: 10 },
  monterey: { lat: 36.625121, lon: -121.765207, zoom: 10 },
  napa: { lat: 38.417836, lon: -122.380023, zoom: 10 },
  san_francisco: { lat: 37.7749, lon: -122.4194, zoom: 10 },
  san_mateo: { lat: 37.529076, lon: -122.308764, zoom: 10 },
  santa_clara: { lat: 37.308325, lon: -121.859261, zoom: 10 },
  solano: { lat: 38.258686, lon: -122.014371, zoom: 10 },
  sonoma: { lat: 38.481106, lon: -122.797838, zoom: 10 }
}

export const validZipcodes = [
  '94501',
  '94502',
  '94536',
  '94537',
  '94538',
  '94539',
  '94540',
  '94541',
  '94542',
  '94543',
  '94544',
  '94545',
  '94546',
  '94550',
  '94551',
  '94552',
  '94555',
  '94557',
  '94560',
  '94566',
  '94568',
  '94577',
  '94578',
  '94579',
  '94580',
  '94586',
  '94587',
  '94588',
  '94601',
  '94602',
  '94603',
  '94604',
  '94605',
  '94606',
  '94607',
  '94608',
  '94609',
  '94610',
  '94611',
  '94612',
  '94613',
  '94614',
  '94615',
  '94617',
  '94618',
  '94619',
  '94620',
  '94621',
  '94622',
  '94623',
  '94624',
  '94649',
  '94659',
  '94660',
  '94661',
  '94662',
  '94666',
  '94701',
  '94702',
  '94703',
  '94704',
  '94705',
  '94706',
  '94707',
  '94708',
  '94709',
  '94710',
  '94712',
  '94720',
  '94505',
  '94506',
  '94507',
  '94509',
  '94511',
  '94513',
  '94514',
  '94516',
  '94517',
  '94518',
  '94519',
  '94520',
  '94521',
  '94522',
  '94523',
  '94524',
  '94525',
  '94526',
  '94527',
  '94528',
  '94529',
  '94530',
  '94531',
  '94547',
  '94548',
  '94549',
  '94553',
  '94556',
  '94561',
  '94563',
  '94564',
  '94565',
  '94569',
  '94570',
  '94572',
  '94575',
  '94582',
  '94583',
  '94595',
  '94596',
  '94597',
  '94598',
  '94801',
  '94802',
  '94803',
  '94804',
  '94805',
  '94806',
  '94807',
  '94808',
  '94820',
  '94850',
  '94901',
  '94903',
  '94904',
  '94912',
  '94913',
  '94914',
  '94915',
  '94920',
  '94924',
  '94925',
  '94929',
  '94930',
  '94933',
  '94937',
  '94938',
  '94939',
  '94940',
  '94941',
  '94942',
  '94945',
  '94946',
  '94947',
  '94948',
  '94949',
  '94950',
  '94956',
  '94957',
  '94960',
  '94963',
  '94964',
  '94965',
  '94966',
  '94970',
  '94971',
  '94973',
  '94974',
  '94976',
  '94977',
  '94978',
  '94979',
  '94998',
  '93426',
  '93450',
  '93901',
  '93902',
  '93905',
  '93906',
  '93907',
  '93908',
  '93912',
  '93915',
  '93920',
  '93921',
  '93922',
  '93923',
  '93924',
  '93925',
  '93926',
  '93927',
  '93928',
  '93930',
  '93932',
  '93933',
  '93940',
  '93942',
  '93943',
  '93944',
  '93950',
  '93953',
  '93954',
  '93955',
  '93960',
  '93962',
  '95004',
  '95012',
  '95039',
  '94503',
  '94508',
  '94515',
  '94558',
  '94559',
  '94562',
  '94567',
  '94573',
  '94574',
  '94576',
  '94581',
  '94599',
  '94102',
  '94103',
  '94104',
  '94105',
  '94107',
  '94108',
  '94109',
  '94110',
  '94111',
  '94112',
  '94114',
  '94115',
  '94116',
  '94117',
  '94118',
  '94119',
  '94120',
  '94121',
  '94122',
  '94123',
  '94124',
  '94125',
  '94126',
  '94127',
  '94129',
  '94130',
  '94131',
  '94132',
  '94133',
  '94134',
  '94137',
  '94139',
  '94140',
  '94141',
  '94142',
  '94143',
  '94144',
  '94145',
  '94146',
  '94147',
  '94151',
  '94158',
  '94159',
  '94160',
  '94161',
  '94163',
  '94164',
  '94172',
  '94177',
  '94188',
  '94002',
  '94005',
  '94010',
  '94011',
  '94014',
  '94015',
  '94016',
  '94017',
  '94018',
  '94019',
  '94020',
  '94021',
  '94025',
  '94026',
  '94027',
  '94028',
  '94030',
  '94037',
  '94038',
  '94044',
  '94060',
  '94061',
  '94062',
  '94063',
  '94064',
  '94065',
  '94066',
  '94070',
  '94074',
  '94080',
  '94083',
  '94128',
  '94401',
  '94402',
  '94403',
  '94404',
  '94497',
  '94022',
  '94023',
  '94024',
  '94035',
  '94039',
  '94040',
  '94041',
  '94042',
  '94043',
  '94085',
  '94086',
  '94087',
  '94088',
  '94089',
  '94301',
  '94302',
  '94303',
  '94304',
  '94305',
  '94306',
  '94309',
  '95002',
  '95008',
  '95009',
  '95011',
  '95013',
  '95014',
  '95015',
  '95020',
  '95021',
  '95026',
  '95030',
  '95031',
  '95032',
  '95035',
  '95036',
  '95037',
  '95038',
  '95042',
  '95044',
  '95046',
  '95050',
  '95051',
  '95052',
  '95053',
  '95054',
  '95055',
  '95056',
  '95070',
  '95071',
  '95101',
  '95103',
  '95106',
  '95108',
  '95109',
  '95110',
  '95111',
  '95112',
  '95113',
  '95115',
  '95116',
  '95117',
  '95118',
  '95119',
  '95120',
  '95121',
  '95122',
  '95123',
  '95124',
  '95125',
  '95126',
  '95127',
  '95128',
  '95129',
  '95130',
  '95131',
  '95132',
  '95133',
  '95134',
  '95135',
  '95136',
  '95138',
  '95139',
  '95140',
  '95141',
  '95148',
  '95150',
  '95151',
  '95152',
  '95153',
  '95154',
  '95155',
  '95156',
  '95157',
  '95158',
  '95159',
  '95160',
  '95161',
  '95164',
  '95170',
  '95172',
  '95173',
  '95190',
  '95191',
  '95192',
  '95193',
  '95194',
  '95196',
  '94510',
  '94512',
  '94533',
  '94534',
  '94535',
  '94571',
  '94585',
  '94589',
  '94590',
  '94591',
  '94592',
  '95620',
  '95625',
  '95687',
  '95688',
  '95696',
  '94515',
  '94922',
  '94923',
  '94926',
  '94927',
  '94928',
  '94931',
  '94951',
  '94952',
  '94953',
  '94954',
  '94955',
  '94972',
  '94975',
  '94999',
  '95401',
  '95402',
  '95403',
  '95404',
  '95405',
  '95406',
  '95407',
  '95409',
  '95412',
  '95416',
  '95419',
  '95421',
  '95425',
  '95430',
  '95431',
  '95433',
  '95436',
  '95439',
  '95441',
  '95442',
  '95444',
  '95446',
  '95448',
  '95450',
  '95452',
  '95462',
  '95465',
  '95471',
  '95472',
  '95473',
  '95476',
  '95480',
  '95486',
  '95487',
  '95492'
]
