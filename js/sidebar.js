// Summary: Sidebar HTML 
// Description: Instead of going into each HTML page to make changes to the sidebar, ideally you could just make changes here and it would apply to all pages.
// Author: Ashley Lu
// Created: 11.26.2023

// code reference: https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript

var mobile_icon ="<span class='mobile'>\
                    <i class='bi bi-x x' onclick='toggleVisibility('#side-bar', 'hidden')'>\
                    </i>\
                </span>";
var profile = "<section id='profile'>\
                    <img class='img-thumbnail rounded-circle' src='"+pathing_to_img+"img/pfp.jpg'>\
                    <h2 class='fredoka-one my-2'>Ashley Lu</h2>\
                    <h6 class='text-font dark-accent'>Illustrator ✦ Game Artist</h6>\
                </section>";
var navigation = "<section id='navigation'>\
                        <ul class='list-unstyled' id='nav'>\
                            <a href='"+pathing_to_home+"' class='fredoka-one'><li id='home'>Home</li></a>\
                            <a href='"+pathing_to_games_contact+"games.html' class='fredoka-one'><li id='games'>Games</li></a>\
                            <a href='"+pathing_to_art+"art/digital-art/' class='fredoka-one'><li id='art'>Art</li></a>\
                        </ul>\
                    </section>";
var socials = "<section id='socials'>\
                    <a target='_blank' href='https://www.linkedin.com/in/luashhley/' title='LinkedIn'><i class='bi bi-linkedin socials'></i></a>\
                    <a target='_blank' href='https://twitter.com/bluemew0' title='Twitter'><i class='bi bi-twitter socials'></i></a>\
                    <a target='_blank' href='https://www.instagram.com/bluemew0/' title='Instagram'><i class='bi bi-instagram socials'></i></a>\
                    <a target='_blank' href='https://bluemew0.etsy.com' title='Etsy'><i class='bi bi-cart-fill socials'></i></a>\
                    <a target='_blank' href='https://bluemew0.itch.io/' title='itch.io'><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 245.371 220.736'><path d='M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z' color='#274879'/></svg></a>\
                </section>";

// <a href='"+pathing_to_games_contact+"contact.html' class='fredoka-one'><li id='contact'>Contact</li></a>\

function activate_page() {
    $('#'+active_page).addClass('active')
};

$('#side-bar').html(mobile_icon+profile+navigation+socials);
activate_page();






