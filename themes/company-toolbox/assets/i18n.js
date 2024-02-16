import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "search": "Search",
      "all_cats": "Categories",
      "found_cats_with": "Found catagories with \"{{search_string}}\"",
      "found_items_with": "Found items with \"{{search_string}}\"",
      "search_for_in": "Search for \"{{search_string}}\" in \"{{category}}\"",
      "added_to_favorites": "Added to favorites.",
      "deleted_from_favorites": "Deleted from favorites.",
      "no_link_set": "No link set",
      "delete_x_from_favorites": "delete {{title}} from favorites",
      "add_x_to_favorites": "add {{title}} to favorites",
      "more_info_and_options": "more information and options",
      "more_info": "more information",
      "favorites": "Favorites",
      "home": "Home",
    }
  },
  nl: {
    translation: {
      "search": "Zoeken",
      "all_cats": "Categorieën",
      "found_cats_with": "Gevonden categorieën met \"{{search_string}}\"",
      "found_items_with": "Gevonden items met \"{{search_string}}\"",
      "search_for_in": "Zoek naar \"{{search_string}}\" in \"{{category}}\"",
      "added_to_favorites": "Toegevoegd aan favorieten.",
      "deleted_from_favorites": "Verwijderd uit favorieten.",
      "no_link_set": "Geen link ingesteld",
      "delete_x_from_favorites": "verwijder {{title}} uit favorieten",
      "add_x_to_favorites": "voeg {{title}} toe aan favorieten",
      "more_info_and_options": "meer informatie en opties",
      "more_info": "meer informatie",
      "favorites": "Favorieten",
      "home": "Home",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: appCnf.defaultContentLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
