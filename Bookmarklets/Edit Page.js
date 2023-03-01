javascript: if (document.body.contentEditable !== 'true') { 
  document.body.contentEditable = 'true';
  void 0
} else { 
  document.body.contentEditable = 'false'; 
  document.designMode = 'off';
  void 0
}
