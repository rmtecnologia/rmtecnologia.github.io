import 'dart:async';
import 'dart:html';
import 'package:pwa/client.dart' as pwa;

void main() {
  if (window.location.hostname != 'localhost') {
    new pwa.Client();
  }
  Element welcome = document.getElementById('welcome');
  
  write(welcome, 'Bem vindo!');
  new Timer(const Duration(seconds: 3), () => write(welcome, 'Somos a RM Tecnologia!'));
  new Timer(const Duration(seconds: 5), () => showHeader());
}

void showHeader() {
    List<Element> links = document.getElementsByTagName('h4');
    links.forEach((Element e) => e.style.opacity = '1');
    
    Element lnkAbout = document.getElementById('lnk-about');
    lnkAbout.addEventListener('click', (_) => loadHTML('about'));
    
    Element lnkContact = document.getElementById('lnk-contact');
    lnkContact.addEventListener('click', (_) => loadHTML('contact'));
    
    Element lnkProjects = document.getElementById('lnk-projects');
    lnkProjects.addEventListener('click', (_) => loadHTML('projects'));
}

void write(Element el, String message) {
    el.innerHtml = '';
    int i = 0;
    const speed = 100;
    Function typeWriter;
    typeWriter = (() {
        if (i < message.length) {
            el.text += message.split('')[i];
            i++;
            new Timer(const Duration(milliseconds: speed), typeWriter);
        }
    });
    typeWriter();
}

void loadHTML(String page) {
  HttpRequest
  .getString('partial/${page}.html')
  .then((String content) {
    document.getElementById('welcome').innerHtml = content;
  });
}