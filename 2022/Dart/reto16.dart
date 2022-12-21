void main() {
  print(fixLetter(
      ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  '));
  print(fixLetter(
      "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"));
}

String fixLetter(String letter) {
  String fixed = letter
      .trim()
      .replaceAll(RegExp(r'\s+'), ' ')
      .replaceAll(RegExp(r'(santa claus)'), 'Santa Claus')
      .replaceAllMapped(RegExp(r'([?!.,])+'), (m) => '${m[1]}')
      .replaceAllMapped(
          RegExp(r'([?!.]\s)(\w)'), (m) => '${m[1]}${m[2]!.toUpperCase()}')
      .replaceAllMapped(RegExp(r'(\w[?1.,])(\w)'), (m) => '${m[1]} ${m[2]}')
      .replaceAllMapped(RegExp(r'(\w)\s([?!.,])'), (m) => '${m[1]}${m[2]}')
      .replaceFirstMapped(RegExp(r'^(\w)'), (m) => m[1]!.toUpperCase());

  return fixed;
}
