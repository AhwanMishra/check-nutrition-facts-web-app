import {referralId} from '../../../../constants/other-constants';
const SearchAdConfiguration = `
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "${referralId}";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "%s";
amzn_assoc_default_search_phrase = "%s";
amzn_assoc_default_category = "Grocery";
amzn_assoc_linkid = "eab64e3edcf99efdf3f722eeb9081907";
amzn_assoc_default_browse_node = "16310101";
amzn_assoc_rows = "%s";
`

const searchAdUrl = `//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US`;
export { SearchAdConfiguration , searchAdUrl }