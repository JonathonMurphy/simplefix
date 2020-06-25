#!/usr/bin/env node
/*****************************************************************
SimpleFIX
Copyright (C) 2017-2020, David Arnold.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*******************************************************************/

// FIX Protocol Constatnts

module.exports = {
  // Tag 1
  tag_account: '1',

  // Tag 2
  tag_advid: '2',

  // Tag 3
  tag_advrefid: '3',

  // Tag 4
  tag_advside: '4',
   advside_buy: 'B',
   advside_cross: 'x',
   advside_sell: 's',
   advside_trade: 't',

  // Tag 5
  tag_advtranstype: '5',
   advtranstype_cancel: 'c',
   advtranstype_new: 'n',
   advtranstype_replace: 'r',

  // Tag 6
  tag_avgpx: '6',

  // Tag 7
  tag_beginseqno: '7',

  // Tag 8
  tag_beginstring: '8',

  // Tag 9
  tag_bodylength: '9',

  // Tag 10
  tag_checksum: '10',

  // Tag 11
  tag_clordid: '11',

  // Tag 12
  tag_commission: '12',

  // Tag 13
  tag_commtype: '13',
   commtype_per_unit: '1',
   commtype_percent: '2',
   commtype_absolute: '3',
   commtype_percent_waived_cash: '4',
   commtype_percent_waived_enhanced: '5',
   commtype_points: '6',

  // Tag 14
  tag_cumqty: '14',

  // Tag 15
  tag_currency: '15',
   currency_afghani: 'afa',
   currency_algerian_dinar: 'dzd',
   currency_andorran_peseta: 'adp',
   currency_argentine_peso: 'ars',
   currency_armenian_dram: 'amd',
   currency_aruban_guilder: 'awg',
   currency_australian_dollar: 'aud',
   currency_azerbaijanian_manat: 'azm',
   currency_bahamian_dollar: 'bsd',
  // TODO: many, many, more.

  // Tag 16
  tag_endseqno: '16',

  // Tag 17
  tag_execid: '17',

  // Tag 18
  tag_execinst: '18',
   execinst_not_held: '1',
   execinst_work: '2',
   execinst_go_along: '3',
   execinst_over_the_day: '4',
   execinst_held: '5',
   execinst_participate_dont_initiate: '6',
   execinst_strict_scale: '7',
   execinst_try_to_scale: '8',
   execinst_stay_on_bid_side: '9',
   execinst_stay_on_offer_side: '0',
   execinst_no_cross: 'a',
   execinst_ok_to_cross: 'B',
   execinst_call_first: 'c',
   execinst_percent_of_volume: 'd',
   execinst_do_not_increase: 'e',
   execinst_do_not_reduce: 'f',
   execinst_all_or_none: 'g',
   execinst_reinstate_on_system_failure: 'h',
   execinst_institutions_only: 'i',
   execinst_reinstate_on_trading_halt: 'j',
   execinst_cancel_on_trading_halt: 'k',
   execinst_last_peg: 'l',
   execinst_mid_price_peg: 'm',
   execinst_non_negotiable: 'n',
   execinst_opening_peg: 'o',
   execinst_market_peg: 'p',
   execinst_cancel_on_system_failure: 'q',
   execinst_primary_peg: 'r',
   execinst_suspend: 's',
   execinst_customer_display_instruction: 'u',
   execinst_netting: 'v',
   execinst_peg_to_vwap: 'w',
   execinst_trade_along: 'x',
   execinst_try_to_stop: 'y',
   execinst_cancel_if_not_best: 'z',
   execinst_trailing_stop_peg: 'a',
   execinst_strict_limit: 'B',
   execinst_ignore_price_validity_checks: 'c',
   execinst_peg_to_limit_price: 'd',
   execinst_work_to_target_strategy: 'e',

  // Tag 19
  tag_execrefid: '19',

  // Tag 20
  tag_exectranstype: '20',
   exectranstype_new: '0',
   exectranstype_cancel: '1',
   exectranstype_correct: '2',
   exectranstype_status: '3',

  // Tag 21
  tag_handlinst: '21',
   handlinst_auto_private: '1',
   handlinst_auto_public: '2',
   handlinst_manual: '3',

  // Tag 22
  tag_securityidsource: '22',
   securityidsource_cusip: '1',
   securityidsource_sedol: '2',
   securityidsource_quik: '3',
   securityidsource_isin: '4',
   securityidsource_ric: '5',
   securityidsource_iso_currency: '6',
   securityidsource_iso_country: '7',
   securityidsource_exchange: '8',
   securityidsource_cta: '9',
   securityidsource_bloomberg: 'a',
   securityidsource_wertpapier: 'B',
   securityidsource_butch: 'c',
   securityidsource_valoren: 'd',
   securityidsource_sicovam: 'e',
   securityidsource_belgian: 'f',
   securityidsource_common: 'g',
   securityidsource_clearing: 'h',
   securityidsource_idsa: 'i',
   securityidsource_opra: 'j',
   securityidsource_idsa_url: 'k',
   securityidsource_letter_of_credit: 'l',
   securityidsource_marketplace: 'm',
   securityidsource_markit_red_entity_clip: 'n',
   securityidsource_markit_red_pair_clip: 'p',
   securityidsource_cftc: 'q',
   securityidsource_idsa_commodity_reference_price: 'r',
   securityidsource_financial_instrument_global_identifier: 's',
   securityidsource_legal_entity_identifier: 't',
   securityidsource_synthetic: 'u',
   securityidsource_fim: 'v',
   securityidsource_index_name: 'w',

  // Tag 23
  tag_ioiid: '23',

  // Tag 24
  tag_ioiothsvc: '24',
   ioiothsvc_autex: 'a',
   ioiothsvc_bridge: 'B',
   ioiothsvc_autex_and_bridge: 'a',
   ioiothsvc_bridge_and_autex: 'ba',

  // Tag 25
  tag_ioiqltyind: '25',
   ioiqltyind_high: 'h',
   ioiqltyind_medium: 'm',
   ioiqltyind_low: 'l',

  // Tag 26
  tag_ioirefid: '26',

  // Tag 27
  tag_ioiqty: '27',
   ioiqltyind_small: 's',
   ioiqltyind_medium: 'm',
   ioiqltyind_large: 'l',
   ioiqltyind_undisclosed: 'u',

  // Tag 28
  tag_ioitranstype: '28',
   ioitranstype_new: 'n',
   ioitranstype_cancel: 'c',
   ioitranstype_replace: 'r',

  // Tag 29
  tag_lastcapacity: '29',
   lastcapacity_agent: '1',
   lastcapacity_cross_as_agent: '2',
   lastcapacity_cross_as_principal: '3',
   lastcapacity_principal: '4',
   lastcapacity_riskless_principal: '5',

  // Tag 30
  tag_lastmkt: '30',
   lastmkt_bloomberg_tradebook: '31',
   lastmkt_bondbook: '32',
   lastmkt_bondclick: '35',
   lastmkt_bondhub: '36',
   lastmkt_limitrader: '37',
   lastmkt_marketaxess: '33',
   lastmkt_municenter: '34',
   lastmkt_none: '0',
   lastmkt_otc: '11',
   lastmkt_nyfix_millenium: '13',
   lastmkt_nyse_bbss: '10',
   lastmkt_posit: '4',
   lastmkt_stockholm_options_market: '17',
   lastmkt_vancouver_options_exchange: '9',
   lastmkt_visible_markets: '38',
   lastmkt_tradeweb: '30',
   lastmkt_archipelago: '39',
   lastmkt_attain: '40',
   lastmkt_brut: '41',
   lastmkt_globenet: '42',
   lastmkt_instinet: '43',
   lastmkt_island: '44',
   lastmkt_marketxt: '45',
   lastmkt_nextrade: '46',
   lastmkt_redibook: '47',
   lastmkt_nqlx: '49',
   lastmkt_onechicago: '50',
   lastmkt_track_data: '51',
   lastmkt_track_trac: '52',
   lastmkt_pipeline: '53',
   lastmkt_bats: '54',
   lastmkt_bids: '55',
   lastmkt_direct_edge_x: '56',
   lastmkt_direct_edge: '57',
   lastmkt_levelats: '58',
   lastmkt_lava_trading: '59',
   lastmkt_boston_options_exchange: '60',
   lastmkt_national_stock_exchange: '61',
   lastmkt_liquidnet: '62',
   lastmkt_nyfix_euro_millenium: '63',
   lastmkt_nasdaq_options_market: '64',
   lastmkt_blockcross_ats: '66',
   lastmkt_match_ats: '67',
   lastmkt_athens_stock_exchange_reuters: 'at',
   lastmkt_athens_stock_exchange_market: 'ase',
   lastmkt_latibex: 'la',
   lastmkt_madrid_stock_exchange: 'mc',
   lastmkt_occidents_stock_exchange: 'od',
   lastmkt_sbi_stock_exchange: 'sbi',
   lastmkt_doha_securities_market: 'dsmd',
   lastmkt_intercontinental_exchange: 'iepa',
   lastmkt_pinksheets: 'pinx',
   lastmkt_the_third_market_corporation: 'thrd',
   lastmkt_tradeweb_llc: 'trw',

  // Tag 31
  tag_lastpx: '31',

  // Tag 32
  tag_lastqty: '32',

  // Tag 33
  tag_nolinesoftext: '33',

  // Tag 34
  tag_msgseqnum: '34',

  // Tag 35
  tag_msgtype: '35',
  msgtype_heartbeat: '0',
  msgtype_test_request: '1',
  msgtype_resend_request: '2',
  msgtype_reject: '3',
  msgtype_sequence_reset: '4',
  msgtype_logout: '5',
  msgtype_indication_of_interest: '6',
  msgtype_advertisement: '7',
  msgtype_execution_report: '8',
  msgtype_order_cancel_reject: '9',
  msgtype_logon: 'a',
  msgtype_news: 'B',
  msgtype_email: 'c',
  msgtype_new_order_single: 'd',
  msgtype_new_order_list: 'e',
  msgtype_order_cancel_request: 'f',
  msgtype_order_cancel_replace_request: 'g',
  msgtype_order_status_request: 'h',
  msgtype_allocation: 'j',
  msgtype_list_cancel_request: 'k',
  msgtype_list_execute: 'l',
  msgtype_list_status_request: 'm',
  msgtype_list_status: 'n',
  msgtype_allocation_ack: 'p',
  msgtype_dont_know_trade: 'q',
  msgtype_quote_request: 'r',
  msgtype_quote: 's',
  msgtype_settlement_instructions: 't',
  msgtype_market_data_request: 'v',
  msgtype_market_data_snapshot_full_refresh: 'w',
  msgtype_market_data_incremental_refresh: 'x',
  msgtype_market_data_request_reject: 'y',
  msgtype_quote_cancel: 'z',
  msgtype_quote_status_request: 'a',
  msgtype_quote_acknowledgement: 'B',
  msgtype_security_definition_request: 'c',
  msgtype_security_definition: 'd',
  msgtype_security_status_request: 'e',
  msgtype_security_status: 'f',
  msgtype_trading_session_status_request: 'g',
  msgtype_trading_session_status: 'h',
  msgtype_mass_quote: 'i',
  msgtype_business_message_reject: 'j',
  msgtype_bid_request: 'k',
  msgtype_bid_response: 'l',
  msgtype_list_strike_price: 'm',
  msgtype_xml_message: 'n',
  msgtype_registration_instructions: 'o',
  msgtype_registration_instructions_response: 'p',
  msgtype_order_mass_cancel_request: 'q',
  msgtype_order_mass_cancel_report: 'r',
  msgtype_new_order_cross: 's',
  msgtype_cross_order_cancel_replace_request: 't',
  msgtype_cross_order_cancel_request: 'u',
  msgtype_security_type_request: 'v',
  msgtype_security_types: 'w',
  msgtype_security_list_request: 'x',
  msgtype_security_list: 'y',
  msgtype_derivative_security_list_request: 'z',
  msgtype_derivative_security_list: 'aa',
  msgtype_new_order_multileg: 'a',
  msgtype_multileg_order_cancel_replace_request: 'ac',
  msgtype_trade_capture_report_request: 'ad',
  msgtype_trade_capture_report: 'ae',
  msgtype_order_mass_status_request: 'af',
  msgtype_quote_request_reject: 'ag',
  msgtype_rfq_request: 'ah',
  msgtype_quote_status_report: 'ai',
  msgtype_quote_response: 'aj',
  msgtype_confirmation: 'ak',
  msgtype_position_maintenance_request: 'al',
  msgtype_position_maintenance_report: 'am',
  msgtype_request_for_positions: 'an',
  msgtype_request_for_positions_ack: 'ao',
  msgtype_position_report: 'ap',
  msgtype_trade_capture_report_request_ack: 'aq',
  msgtype_trade_capture_report_ack: 'ar',
  msgtype_allocation_report: 'as',
  msgtype_allocation_report_ack: 'at',
  msgtype_confirmation_ack: 'au',
  msgtype_settlement_instruction_request: 'av',
  msgtype_assignment_report: 'aw',
  msgtype_collateral_request: 'ax',
  msgtype_collateral_assignment: 'ay',
  msgtype_collateral_response: 'az',
  msgtype_collateral_report: 'ba',
  msgtype_collateral_inquiry: 'b',
  msgtype_network_status_request: 'bc',
  msgtype_network_status_response: 'bd',
  msgtype_user_request: 'be',
  msgtype_user_response: 'bf',
  msgtype_collateral_inquiry_ack: 'bg',
  msgtype_confirmation_request: 'bh',

  // Tag 36
  tag_newseqno: '36',

  // Tag 37
  tag_orderid: '37',

  // Tag 38
  tag_orderqty: '38',

  // Tag 39
  tag_ordstatus: '39',
  ordstatus_new: '0',
  ordstatus_partially_filled: '1',
  ordstatus_filled: '2',
  ordstatus_done_for_day: '3',
  ordstatus_canceled: '4',
  ordstatus_replaced: '5',
  ordstatus_pending_cancel: '6',
  ordstatus_stopped: '7',
  ordstatus_rejected: '8',
  ordstatus_suspended: '9',
  ordstatus_pending_new: 'a',
  ordstatus_calculated: 'B',
  ordstatus_expired: 'c',
  ordstatus_accepted_for_bidding: 'd',
  ordstatus_pending_replace: 'e',

  // Tag 40
  tag_ordtype: '40',
  ordtype_market: '1',
  ordtype_limit: '2',
  ordtype_stop: '3',
  ordtype_stop_limit: '4',
  ordtype_market_on_close: '5',
  ordtype_with_or_without: '6',
  ordtype_limit_or_better: '7',
  ordtype_limit_with_or_without: '8',
  ordtype_on_basis: '9',
  ordtype_on_close: 'a',
  ordtype_limit_on_close: 'B',
  ordtype_forex_market: 'c',
  ordtype_previously_quoted: 'd',
  ordtype_previously_indicated: 'e',
  ordtype_forex_limit: 'f',
  ordtype_forex_swap: 'g',
  ordtype_forex_previously_quoted: 'h',
  ordtype_funari: 'i',
  ordtype_market_if_touched: 'j',
  ordtype_market_with_leftover_as_limit: 'k',
  ordtype_previous_fund_valuation_point: 'l',
  ordtype_next_fund_valuation_point: 'm',
  ordtype_pegged: 'p',
  ordtype_counter_order_selection: 'q',
  ordtype_stop_on_bid_or_offer: 'r',
  ordtype_stop_limit_on_bid_or_offer: 's',

  // Tag 41
  tag_origclordid: '41',

  // Tag 42
  tag_origtime: '42',

  // Tag 43
  tag_possdupflag: '43',
  possdupflag_no: 'n',
  possdupflag_yes: 'y',

  // Tag 44
  tag_price: '44',

  // Tag 45
  tag_refseqnum: '45',

  // Tag 46
  tag_relatdsym: '46',

  // Tag 47
  tag_rule80a: '47',
  rule80a_agency_single_order: 'a',
  rule80a_all_other_orders_as_agent_for_other_member: 'w',
  rule80a_competing_dealer_trades: 't',
  rule80a_individual_investor_single_order: 'i',
  rule80a_principal: 'p',
  rule80a_program_order_index_arb_for_individual_customer: 'j',
  rule80a_program_order_index_arb_for_member_firm_org: 'd',
  rule80a_program_order_index_arb_for_other_agency: 'u',
  rule80a_program_order_index_arb_for_other_member: 'm',
  rule80a_program_order_non_index_arb_for_individual_customer: 'k',
  rule80a_program_order_non_index_arb_for_member_firm_org: 'c',
  rule80a_program_order_non_index_arb_for_other_agency: 'y',
  rule80a_program_order_non_index_arb_for_other_member: 'n',
  rule80a_roprietary_transactions_for_competing_market_maker_that_is_affiliated_with_the_clearing_member: 'o',
  rule80a_short_exempt_transaction_b: 'B',
  rule80a_short_exempt_transaction_f: 'f',
  rule80a_short_exempt_transaction_for_member_competing_market_maker_affiliated_with_the_firm_clearing_the_trade: 'l',
  rule80a_short_exempt_transaction_for_member_competing_market_maker_not_affiliated_with_the_firm_clearing_the_thread: 'x',
  rule80a_short_exempt_transaction_for_non_member_competing_market_maker: 'z',
  rule80a_short_exempt_transaction_for_principal: 'e',
  rule80a_short_exempt_transaction_h: 'h',
  rule80a_specialist_trades: 's',
  rule80a_transactions_for_the_account_of_a_non_member_competing_market_maker: 'r',

  // Tag 48
  tag_security_id: '48',

  // Tag 49
  tag_sender_compid: '49',

  // Tag 50
  tag_sender_subid: '50',

  // Tag 51
  tag_sending_date: '51',

  // Tag 52
  tag_sending_time: '52',

  // Tag 53
  tag_quantity: '53',

  // Tag 54
  tag_side: '54',
  side_buy: '1',
  side_sell: '2',
  side_buy_minus: '3',
  side_sell_plus: '4',
  side_sell_short: '5',
  side_sell_short_exempt: '6',
  side_undisclosed: '7',
  side_cross: '8',
  side_cross_short: '9',
  side_cross_short_exempt: 'a',
  side_as_defined: 'B',
  side_opposite: 'c',
  side_subscribe: 'd',
  side_redeem: 'e',
  side_lend: 'f',
  side_borrow: 'g',
  side_sell_undisclosed: 'h',

  // Tag 55
  tag_symbol: '55',

  // Tag 56
  tag_target_compid: '56',

  // Tag 57
  tag_target_subid: '57',

  // Tag 58
  tag_text: '58',

  // Tag 59
  tag_timeinforce: '59',
  timeinforce_day: '0',
  timeinforce_good_till_cancel: '1',
  timeinforce_at_the_opening: '2',
  timeinforce_immediate_or_cancel: '3',
  timeinforce_fill_or_kill: '4',
  timeinforce_good_till_crossing: '5',
  timeinforce_good_till_date: '6',
  timeinforce_at_the_close: '7',
  timeinforce_good_through_crossing: '8',
  timeinforce_at_crossing: '9',
  timeinforce_good_for_time: 'a',
  timeinforce_good_for_auction: 'B',

  // Tag 60
  tag_transacttime: '60',

  // Tag 61
  tag_urgency: '61',
  urgency_normal: '0',
  urgency_flash: '1',
  urgency_background: '2',

  // Tag 62
  tag_validuntiltime: '62',

  // Tag 63
  tag_settltype: '63',
  settltype_regular: '0',
  settltype_cash: '1',
  settltype_next_day: '2',
  settltype_t2: '3',
  settltype_t3: '4',
  settltype_t4: '5',
  settltype_future: '6',
  settltype_when_and_if_issued: '7',
  settltype_sellers_option: '8',
  settltype_t5: '9',
  settltype_t1: 'a',
  settltype_broken_date: 'B',
  settltype_spot1: 'c',

  // Tag 64
  tag_settldate: '64',

  // Tag 65
  tag_symbolsfx: '65',

  // Tag 66
  tag_listid: '66',

  // Tag 67
  tag_listseqno: '67',

  // Tag 68
  tag_totnoorders: '68',

  // Tag 69
  tag_listexecinst: '69',

  // Tag 70
  tag_allocid: '70',

  // Tag 71
  tag_alloctranstype: '71',
  alloctranstype_new: '0',
  alloctranstype_replace: '1',
  alloctranstype_cancel: '2',
  alloctranstype_preliminary: '3',
  alloctranstype_calculated: '4',
  alloctranstype_calculated_without_preliminary: '5',
  alloctranstype_reversal: '6',

  // Tag 72
  tag_refallocid: '72',

  // Tag 73
  tag_noorders: '73',

  // Tag 74
  tag_avgprxprecision: '74',

  // Tag 75
  tag_tradedate: '75',

  // Tag 76
  tag_execbroker: '76',

  // Tag 77
  tag_openclose: '77',
  openclose_open: 'o',
  openclose_closer: 'c',

  // Tag 78
  tag_noallocs: '78',

  // Tag 79
  tag_allocaccount: '79',

  // Tag 80
  tag_allocshares: '80',

  // Tag 81
  tag_processcode: '81',
  processcode_regular: '0',
  processcode_soft_dollar: '1',
  processcode_step_in: '2',
  processcode_step_out: '3',
  processcode_soft_dollar_step_in: '4',
  processcode_soft_dollar_step_out: '5',
  processcode_plan_sponsor: '6',

  // Tag 82
  tag_norpts: '82',

  // Tag 83
  tag_rptseq: '83',

  // Tag 84
  tag_cxlqty: '84',

  // Tag 85

  // Tag 86

  // Tag 87
  tag_allocstatus: '87',
  allocstatus_accepted: '0',
  allocstatus_rejected: '1',
  allocstatus_partial_accept: '2',
  allocstatus_received: '3',

  // Tag 88
  tag_allocrejcode: '88',
  allocrejcode_unknown_account: '0',
  allocrejcode_incorrect_quantity: '1',
  allocrejcode_incorrect_average_price: '2',
  allocrejcode_unknown_executing_broker_mnemonic: '3',
  allocrejcode_commission_difference: '4',
  allocrejcode_unknown_orderid: '5',
  allocrejcode_unknown_listid: '6',
  allocrejcode_other: '7',

  // Tag 89
  tag_signature: '89',

  // Tag 90
  tag_securedatalen: '90',

  // Tag 91
  tag_securedata: '91',

  // Tag 92
  tag_brokerofcredit: '92',

  // Tag 93
  tag_signaturelength: '93',

  // Tag 94
  tag_emailtype: '94',
  emailtype_new: '0',
  emailtype_reply: '1',
  emailtype_admin_reply: '2',

  // Tag 95
  tag_rawdatalength: '95',

  // Tag 96
  tag_rawdata: '96',

  // Tag 97
  tag_possresend: '97',

  // Tag 98
  tag_encryptmethod: '98',
  encryptmethod_none: '0',
  encryptmethod_pkcs: '1',
  encryptmethod_des: '2',
  encryptmethod_pkcs_des: '3',
  encryptmethod_pgp_des: '4',
  encryptmethod_pgp_des_md5: '5',
  encryptmethod_pem_des_md5: '6',

  // Tag 99
  tag_stoppx: '99',

  // Tag 100
  tag_exdestination: '100',

  // Tag 101

  // Tag 102
  tag_cxlrejreason: '102',
  cxlrejreason_too_late_to_cancel: '0',
  cxlrejreason_unknown_order: '1',
  cxlrejreason_broker_option: '2',
  cxlrejreason_order_already_pending_cancel: '3',

  // Tag 103
  tag_orderrejreason: '103',
  orderrejreason_broker_option: '0',
  orderrejreason_unknown_symbol: '1',
  orderrejreason_exchange_closed: '2',
  orderrejreason_order_exceeds_limit: '3',
  orderrejreason_too_late_to_enter: '4',
  orderrejreason_unknown_order: '5',
  orderrejreason_duplicate_order: '6',
  orderrejreason_duplicate_of_verbally_communicated_order: '7',
  orderrejreason_stale_order: '8',

  // Tag 104
  tag_ioiqualifier: '104',
  ioiqualifier_all_or_none: 'a',
  ioiqualifier_at_the_close: 'c',
  ioiqualifier_in_touch_with: 'i',
  ioiqualifier_limit: 'l',
  ioiqualifier_more_behind: 'm',
  ioiqualifier_at_the_open: 'o',
  ioiqualifier_taking_a_position: 'p',
  ioiqualifier_at_the_market: 'q',
  ioiqualifier_portfolio_shown: 's',
  ioiqualifier_through_the_day: 't',
  ioiqualifier_versus: 'v',
  ioiqualifier_indication_working_away: 'w',
  ioiqualifier_crossing_opportunity: 'x',
  ioiqualifier_at_the_midpoint: 'y',
  ioiqualifier_pre_open: 'z',

  // Tag 105
  tag_waveno: '105',

  // Tag 106
  tag_issuer: '106',

  // Tag 107
  tag_securitydesc: '107',

  // Tag 108
  tag_heartbtint: '108',

  // Tag 109
  tag_clientid: '109',

  // Tag 110
  tag_minqty: '110',

  // Tag 111
  tag_maxfloor: '111',

  // Tag 112
  tag_testreqid: '112',

  // Tag 113
  tag_reporttoexch: '113',

  // Tag 114
  tag_locatereqd: '114',

  // Tag 115
  tag_onbehalfofcompid: '115',

  // Tag 116
  tag_onbehalfofsubid: '116',

  // Tag 117
  tag_quoteid: '117',

  // Tag 118
  tag_netmoney: '118',

  // Tag 119
  tag_settlcurramt: '119',

  // Tag 120
  tag_settlcurrency: '120',

  // Tag 122
  tag_origsendingtime: '122',

  // Tag 123
  tag_gapfillflag: '123',
  gapfillflag_no: 'n',
  gapfillflag_yes: 'y',

  // Tag 131
  tag_quotereqid: '131',

  // Tag 132
  tag_bidpx: '132',

  // Tag 133
  tag_askbx: '133',

  // Tag 141
  tag_resetseqnumflag: '141',
  resetseqnumflag_no: 'n',
  resetseqnumflag_yes: 'y',

  // Tag 150
  tag_exectype: '150',
  exectype_new: '0',
  exectype_partial_fill: '1',
  exectype_fill: '2',
  exectype_done_for_day: '3',
  exectype_canceled: '4',
  exectype_replace: '5',
  exectype_pending_cancel: '6',
  exectype_stopped: '7',
  exectype_rejected: '8',
  exectype_suspended: '9',
  exectype_pending_new: 'a',
  exectype_calculated: 'B',
  exectype_expired: 'c',
  exectype_restated: 'd',
  exectype_pending_replace: 'e',

  // Tag 151
  tag_leavesqty: '151',

  // Tag 152
  tag_cashorderqty: '152',

  // Tag 167
  tag_securitytype: '167',
  securitytype_wildcard_entry: '?',
  securitytype_bankers_acceptance: 'ba',
  securitytype_convertible_bond: 'c',
  securitytype_certificate_of_deposit: 'cd',
  securitytype_collateralize_mortgage_obligation: 'cmo',
  securitytype_corporate_bond: 'corp',
  securitytype_commercial_paper: 'cp',
  securitytype_corporate_private_placement: 'cpp',
  securitytype_common_stock: 'cs',
  securitytype_federal_housing_authority: 'fha',
  securitytype_federal_home_loan: 'fhl',
  securitytype_federal_national_mortgage_association: 'fn',
  securitytype_foreign_exchange_contract: 'for',
  securitytype_future: 'fut',
  securitytype_government_national_mortgage_association: 'gn',
  securitytype_treasuries_plus_agency_debenture: 'govt',
  securitytype_mortgage_ioette: 'iet',
  securitytype_mutual_fund: 'mf',
  securitytype_mortgage_interest_only: 'mio',
  securitytype_mortgage_principal_only: 'mpo',
  securitytype_mortgage_private_placement: 'mpp',
  securitytype_miscellaneous_pass_thru: 'mpt',
  securitytype_municipal_bond: 'muni',
  securitytype_no_isitc_security_type: 'none',
  securitytype_option: 'opt',
  securitytype_preferred_stock: 'ps',
  securitytype_repurchase_agreement: 'rp',
  securitytype_reverse_repurchase_agreement: 'rvrp',
  securitytype_student_loan_marketing_association: 'sl',
  securitytype_time_deposit: 'td',
  securitytype_us_treasury_bill: 'ust',
  securitytype_warrant: 'war',
  securitytype_cats_tigers_lions: 'zoo',

  // Tag 297
  tag_quotestatus: '297',
  quotestatus_accepted: '0',
  quotestatus_canceled_for_symbol: '1',
  quotestatus_canceled_for_security_type: '2',
  quotestatus_canceled_for_underlying: '3',
  quotestatus_canceled_all: '4',
  quotestatus_rejected: '5',
  quotestatus_removed_from_market: '6',
  quotestatus_expired: '7',
  quotestatus_query: '8',
  quotestatus_quote_not_found: '9',
  quotestatus_pending: '10',
  quotestatus_pass: '11',
  quotestatus_locked_market_warning: '12',
  quotestatus_cross_market_warning: '13',
  quotestatus_canceled_due_to_lock_market: '14',
  quotestatus_canceled_due_to_cross_market: '15',

  // Tag 373
  tag_sessionrejectreason: '373',
  sessionrejectreason_invalid_tag_number: '0',
  sessionrejectreason_required_tag_missing: '1',
  sessionrejectreason_tag_not_defined_for_this_message_type: '2',
  sessionrejectreason_undefined_Tag: '3',
  sessionrejectreason_tag_specified_without_a_value: '4',
  sessionrejectreason_value_incorrect_for_this_Tag: '5',
  sessionrejectreason_incorrect_data_format_for_value: '6',
  sessionrejectreason_decryption_problem: '7',
  sessionrejectreason_signature_problem: '8',
  sessionrejectreason_compid_problem: '9',
  sessionrejectreason_sendingtime_accuracy_problem: '10',
  sessionrejectreason_invalid_msgtype: '11',
  sessionrejectreason_xml_validation_error: '12',
  sessionrejectreason_tag_appears_more_than_once: '13',
  sessionrejectreason_tag_specified_out_of_required_order: '14',
  sessionrejectreason_repeating_group_fields_out_of_order: '15',
  sessionrejectreason_incorrect_numingroup_count: '16',
  sessionrejectreason_non_data_value_includes_field_delimiter: '17',
  sessionrejectreason_other: '99',

  // Tag 423
  tag_pricetype: '423',
  pricetype_percentage: '1',
  pricetype_per_unit: '2',
  pricetype_fixed_amount: '3',

  // Tag 434
  tag_cxlrejresponseto: '434',
  cxlrejresponseto_order_cancel_request: '1',
  cxlrejresponseto_order_cancel_replace_request: '2',

  // Tag 658
  tag_quoterequestrejectreason: '658',
  quoterequestrejectreason_unknown_symbol: '1',
  quoterequestrejectreason_exchange: '2',
  quoterequestrejectreason_quote_request_exceeds_limit: '3',
  quoterequestrejectreason_too_late_to_enter: '4',
  quoterequestrejectreason_invalid_price: '5',
  quoterequestrejectreason_not_authorized_to_request_quote: '6',
  quoterequestrejectreason_no_match_for_inquiry: '7',
  quoterequestrejectreason_no_market_for_instrument: '8',
  quoterequestrejectreason_no_inventory: '9',
  quoterequestrejectreason_pass: '10',
  quoterequestrejectreason_other: '99',

  // Tag 693
  tag_quoterespid: '693',

  // Tag 2759
  tag_groupamount: '2759',

  // Tag 2760
  tag_group_remaining_amount: '2760',

  // Tag 2761
  tag_allocgroupamount: '2761',

}
