import './Editor.sass';
import React from "react";
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react'
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface IProps {
  value: string,
  set: Function
}

const Editor: React.FC<IProps> = ({value, set}) => {
  return (
    <div className='editor' >
      <CKEditor
        editor={ ClassicEditor }
        onChange={ ( e: any, editor: any ) => set( editor.getData() ) }
        data={ value }
      />
    </div>
  )
}

export default Editor