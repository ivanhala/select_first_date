jQuery(document).on( 'wbk_date_dropdown_initialized', function(){     
    jQuery('.wbk_date').val( jQuery('.wbk_date option:eq(1)').val() );
  	jQuery('.wbk_date').trigger('change');
});
