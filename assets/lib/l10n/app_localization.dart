import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter/services.dart';

class AppLocalizations {
  static AppLocalizations? _current;

  static AppLocalizations get current {
    _current ??= AppLocalizations();
    return _current!;
  }

  static const List<Locale> supportedLocales = [
    Locale('en', ''), // English
    Locale('es', ''), // Spanish
    Locale('pt', ''), // Portuguese
    Locale('fr', ''), // French
  ];

  static Map<String, String> _localizedStrings = {};

  // Initialize translations for supported locales
  static Future<void> load(Locale locale) async {
    String jsonString;
    if (locale.languageCode == 'en') {
      jsonString = await rootBundle.loadString('assets/i18n/en.json');
    } else if (locale.languageCode == 'es') {
      jsonString = await rootBundle.loadString('assets/i18n/es.json');
    } else if (locale.languageCode == 'pt') {
      jsonString = await rootBundle.loadString('assets/i18n/pt.json');
    } else if (locale.languageCode == 'fr') {
      jsonString = await rootBundle.loadString('assets/i18n/fr.json');
    } else {
      // Default to English if the locale is not supported
      jsonString = await rootBundle.loadString('assets/i18n/en.json');
    }
    _localizedStrings = json.decode(jsonString).cast<String, String>();
  }

  String translate(String key) {
    return _localizedStrings[key] ?? '**$key not found**'; // Provide a fallback
  }

  // Helper method to access the current AppLocalizations instance
  static AppLocalizations of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations)!;
  }
}

// Create a delegate for AppLocalizations
class AppLocalizationsDelegate extends LocalizationsDelegate<AppLocalizations> {
  const AppLocalizationsDelegate();

  @override
  bool isSupported(Locale locale) => AppLocalizations.supportedLocales.contains(locale);

  @override
  Future<AppLocalizations> load(Locale locale) async {
    final translations = AppLocalizations();
    await AppLocalizations.load(locale);
    return translations;
  }

  @override
  bool shouldReload(AppLocalizationsDelegate old) => false;
}
