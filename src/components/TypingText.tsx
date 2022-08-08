import React from 'react'
import $ from "jquery";


interface Props {
    text: string;
    delay: number;
    fontSize: number;
    id: string;
}
const TypingText: React.FC<Props> = (props) => {

    var wordflick = function () {
        var words = [props.text],
            part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            speed = 70;

        setTimeout(function() {
            console.log(props.id);
            setInterval(function () {
            if (forwards) {
              if (offset >= words[i].length) {
                ++skip_count;
              }
            }
            else {
              if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                  i = 0;
                }
              }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
              if (forwards) {
                offset++;
              }
              else {
                offset--;
              }
            }
            $('#' + props.id).text(part);
          }, speed * 1.2);
        }, props.delay
        )
    };

    $(document).ready(function () {
        wordflick();
      });
    return (
        <div
            className='typingText'
            style={{fontSize: props.fontSize}}
            id={props.id}>
            <h1></h1>
        </div>
    )
}

export default TypingText
