class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return new sanitizer.sanitizeToString(string); 
  }

  static titleize(String) {

  }

}