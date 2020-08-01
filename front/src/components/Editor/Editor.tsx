import React, {useState, useRef, useEffect} from "react";
import  {Editor, EditorState, RichUtils} from 'draft-js';
import './Editor.sass'

class RichEditorExample extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    // @ts-ignore
    this.focus = () => this.refs.editor.focus();
    // @ts-ignore
    this.onChange = (editorState) => this.setState({editorState});

    // @ts-ignore
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    // @ts-ignore
    this.onTab = (e) => this._onTab(e);
    // @ts-ignore
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    // @ts-ignore
    this.toggleInlineStyle = (style: any) => this._toggleInlineStyle(style);
  }

  _handleKeyCommand(command: any) {
    // @ts-ignore
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      // @ts-ignore
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e: any) {
    const maxDepth = 4;
    // @ts-ignore
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType: any) {
    // @ts-ignore
    this.onChange(
      RichUtils.toggleBlockType(
        // @ts-ignore
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle: any) {
    // @ts-ignore
    this.onChange(
      RichUtils.toggleInlineStyle(
        // @ts-ignore
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    // @ts-ignore
    const {editorState} = this.state;

    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          // @ts-ignore
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          // @ts-ignore
          onToggle={this.toggleInlineStyle}
        />
        {/*
        // @ts-ignore*/}
        <div className={className} onClick={this.focus}>
          <Editor
            // @ts-ignore
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            // @ts-ignore
            handleKeyCommand={this.handleKeyCommand}
            // @ts-ignore
            onChange={this.onChange}
            // @ts-ignore
            onTab={this.onTab}
            placeholder="Описание Задачи"
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

const getBlockStyle = (block: any) => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

interface IStyleButton {
  style: any
  label: string
  onToggle: any
  active: boolean
}

const StyleButton: React.FC<IStyleButton> = ({label, active, style, onToggle}) => {
  const ontoggle = (e: any) => {
    e.preventDefault();
    onToggle(style);
  };

  let className = 'RichEditor-styleButton';

  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onMouseDown={ontoggle}>{ label }</span>
  )
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

interface IBlockStyleControls {
  editorState: any
  onToggle: any
}

const BlockStyleControls: React.FC<IBlockStyleControls> = ({editorState, onToggle}) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          // @ts-ignore
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

interface IInlineStyleControls {
  editorState: any
  onToggle: any
}

const InlineStyleControls: React.FC<IInlineStyleControls> = ({editorState, onToggle}) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          // @ts-ignore
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default RichEditorExample