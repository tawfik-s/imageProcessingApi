export const imageNewNameAfterResize = (
  imageName: string,
  _width: number,
  _height: number
): string => {
  let imageNameComponents: string[] = imageName.split('.');
  let imageFileName = imageNameComponents[0];
  let format = imageNameComponents[1];
  let destName:string='';
  if(format!=undefined){
  destName =
    ((((imageFileName + '_height' + _height) as string) +
      '_width' +
      _width) as string) +
    '.' +
    format;
}else{
    destName =
    ((((imageFileName + '_height' + _height) as string) +
      '_width' +
      _width) as string) +
    '.jpg';
}

    
  return destName;
};
