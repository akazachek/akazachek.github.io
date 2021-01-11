import React, { Component } from 'react';
import PostPreview from '../components/PostPreview';

/* posts */
import JordanBrouwer from './writing/JordanBrouwer';

class Posts extends Component {

    componentDidMount() {
        window.KaTeXRender();
    }

    render() {

        return (
            <div id = "KaTeXSec" className = "coDiv posts">
                <ul>
                    <PostPreview date = "2020-01-11" name = "Test title."  summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium diam id eros elementum, vel ornare ligula tristique. Donec auctor nibh et est tincidunt fermentum. Mauris turpis est, mollis eu placerat sed, imperdiet ac augue. Nulla congue vitae velit in tristique. Donec hendrerit vestibulum feugiat. \(x+5\) Morbi vel volutpat orci. Quisque ligula mi, accumsan et est vitae, ornare convallis enim." full = {<JordanBrouwer />}></PostPreview>
                    <PostPreview date = "2001-09-20" name = "Another test title."  summary = "Pellentesque bibendum tempus lorem sed rutrum. Maecenas eleifend mattis blandit. Aenean justo lacus, congue et lacus nec, molestie venenatis justo. Aenean lorem tortor, scelerisque a sem eu, scelerisque porta mauris. Ut lacinia erat mauris, non lacinia augue pellentesque vitae. Etiam tristique mi in justo maximus, in blandit libero aliquam. Aenean vestibulum finibus felis, non varius nunc rutrum nec. Nam condimentum vitae enim ut luctus. Quisque egestas auctor est sed pulvinar. Nam aliquam congue molestie. Cras pellentesque viverra ornare."></PostPreview>
                </ul>
            </div>
        )
    }
}

export default Posts