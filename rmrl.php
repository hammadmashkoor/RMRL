<?php
/*
Plugin Name: RMRL
Plugin URI: https://hammadmashkoor.github.io/RMRL
Description: This is a Read More Read Less Button Plugin for Wordpress, Jquery Code used from freakyjolly.com
Version: 1.0
Author: Hammad Mashkoor
*/

function plugin_name_scripts() {
wp_enqueue_style( 'style', plugins_url('css/rmrlstyle.css', __FILE__));
wp_enqueue_script( 'script', plugins_url('js/rmrlscript.js', __FILE__), array('jquery'));
}
add_action('init', 'plugin_name_scripts');
?>