import React from 'react';

export const sharePath1 = (
  <path
    d={ `m389.332031 160c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657
    0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48
    48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
);

export const sharePath2 = (
  <path
    d={ `m389.332031 512c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657
    0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48
    48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
);

export const sharePath3 = (
  <path
    d={ `m80 336c-44.097656 0-80-35.882812-80-80s35.902344-80 80-80 80 35.882812 80
    80-35.902344 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48
    48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
);

export const sharePath4 = (
  <path
    d={ `m135.703125
    240.425781c-5.570313
    0-10.988281-2.902343-13.910156-8.0625-4.375-7.679687-1.707031-17.453125
    5.972656-21.824219l197.953125-112.855468c7.65625-4.414063 17.449219-1.726563
    21.800781 5.976562 4.375 7.679688 1.707031 17.449219-5.972656
    21.824219l-197.953125 112.851563c-2.496094 1.40625-5.203125 2.089843-7.890625
    2.089843zm0 0` }
  />
);

const line = '0-5.398437-.683593-7.894531-2.';
const line1 = '109375l-197.953125-112.855468c-7.679687-4.371094-10';

export const sharePath5 = (
  <path
    d={ `m333.632812 416.425781c-2.6875
    ${line}${line1}.34375-14.144532-5.972656-21.824219
    4.351562-7.699219 14.125-10.367188 21.804688-5.972657l197.949218
    112.851563c7.679688 4.375 10.347656 14.144531 5.976563 21.824219-2.945313
    5.183594-8.363281 8.085937-13.910157 8.085937zm0 0` }
  />
);

const compassLine = '119.367c-36.288-36.287-82.568-58.943-132.634-65.';

export const compassPath1 = (
  <path
    d={ `m418.635
    ${compassLine}425v-23.942c0-16.542-13.458-30-30-30s-30
    13.458-30 30v23.953c-34.188 4.464-66.902 16.539-95.942 35.583-4.618 3.028-5.907
    9.228-2.878 13.846 3.028 4.618 9.227 5.906 13.846 2.878 28.793-18.882
    61.547-30.263 95.691-33.381.16-.011.32-.023.478-.042 6.228-.554 12.501-.837
    18.805-.837 115.794 0 210 94.206 210 210s-94.206 210-210
    210-210-94.206-210-210c0-41.035 11.848-80.794 34.264-114.981 3.028-4.619
    1.739-10.818-2.879-13.846-4.619-3.027-10.817-1.739-13.846 2.879-24.558
    37.454-37.538 81.006-37.538 125.948 0 61.435 23.924 119.193 67.365 162.635
    43.441 43.441 101.199 67.365 162.634 67.365s119.193-23.924
    162.634-67.365c43.442-43.441 67.366-101.2
    67.366-162.635s-23.924-119.191-67.366-162.633zm-172.635-67.141v-22.226c0-5.514
    4.486-10 10-10s10 4.486 10 10v22.228c-3.322-.141-6.655-.226-10-.226-3.342
    0-6.675.081-10 .224z` }
  />
);

export const compassPath2 = (
  <path
    d={ `m256 472.002c104.767 0 190-85.233 190-190s-85.233-190-190-190c-104.766
    0-190 85.234-190 190s85.234 190 190 190zm0-360.001c93.739 0 170 76.262 170
    170s-76.262 170-170 170-170-76.262-170-170c.001-93.738 76.263-170 170-170z` }
  />
);

const compassLine1 = '10-10s-4.478-10-10-10h-83.692l-8.734-13.197c-.741-1.12-1.7-2';

export const compassPath3 = (
  <path
    d={ `m137.559 292.002h83.691l8.734 13.197c.741 1.12 1.7 2.079 2.82 2.82l13.197
    8.735v83.691c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10v-70.455l71.362
    47.232c1.687 1.116 3.606 1.661 5.517 1.661 2.581 0 5.142-.997 7.074-2.929
    3.361-3.362 3.892-8.626 1.268-12.59l-47.232-71.362h70.455c5.522 0 10-4.477
    ${compassLine1}.079-2.819-2.82l-13.197-8.735v-83.691c0-5.523-4.478-10-10-10-5.523
    0-10 4.477-10 10v70.454l-71.362-47.232c-3.965-2.624-9.229-2.094-12.591
    1.268s-3.892 8.626-1.268 12.59l47.232 71.363h-70.454c-5.523 0-10 4.477-10
    10s4.476 10 9.999 10zm128.904-20.462 40.955 61.879-61.879-40.955-40.955-61.879z` }
  />
);

export const compassPath4 = (
  <path
    d={ `m100.44 136.438c2.4 0 4.808-.859 6.724-2.601l.005-.005c4.086-3.715
    4.385-10.037.67-14.124-3.713-4.086-10.042-4.386-14.128-.67-4.086 3.715-4.388
    10.04-.673 14.126 1.974 2.172 4.683 3.274 7.402 3.274z` }
  />
);

const foodLine = '22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.';
const foodLine1 = '6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.';
const foodLine2 = '440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.';
const foodLine3 = '7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.';
const foodLine4 = '.402343-4.789063-12.347656-7.617188-19.558593-7.';
const foodLine5 = '.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.';
const foodLine6 = '.382813-162.90625c-2.855468-3.136719-7.710937-3.';

export const foodPath1 = (
  <path
    d={ `m380.589844 204.039062
    30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718
    21.4375-1.808594 40.679688-13.039063
    52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625
    ${foodLine}246094-18.460937-5${foodLine4}960938-36.726563-1.757812-72.175782
    10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219
    14.160156-25.042969 34.609375-24.269531
    56.113281.003906.050781.003906.105469.007812.160156l1.714844
    30.089844c.667968 11.730469-3.632813 23.304687-11.777344
    31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032
    16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625
    13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313
    10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219
    19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188
    18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312
    277.0625c-3.414063 4.171874-8.664063
    ${foodLine1}964844-6${foodLine5}046875-.25-6.128906
    1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532
    16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031
    6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406
    56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625
    10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063
    5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125
    34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124
    24.164062l-30 1.898438c-15.984376 1.015625-30.945313
    8.726562-41.066407 21.179688zm0 0"/><path d="m497.820312
    ${foodLine2}628906-10.84375.503906-2.851562
    3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938
    3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875
    14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063
    ${foodLine3}285156l-148${foodLine6}.359375-10.84375-.507813-3.132812
    2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437
    7.054687 15.8125 11.054687 26.160156
    11.257813.269531.003906.535157.007812.804688.007812 11.121093 0
    22.242187-4.511719 29.886719-12.160156 7.835937-7.83593812.378906-19.308594
    12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0
    0` }
  />
);

const foodLine7 = '440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.';
const foodLine8 = '7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.';
const foodLine9 = '.382813-162.90625c-2.855468-3.136719-7.710937-3.';

export const foodPath2 = (
  <path
    d={ `m497.820312
    ${foodLine7}628906-10.84375.503906-2.851562
    3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157
    6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156
    19.539063-4.9375 4.9375-12.226563 7.808594-19.539063
    ${foodLine8}285156l-148${foodLine9}359375-10.84375-.507813-3.132812
    2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437
    7.054687 15.8125 11.054687 26.160156
    11.257813.269531.003906.535157.007812.804688.007812 11.121093 0
    22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594
    12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0` }
  />
);

const fL10 = '3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.';
const fL11 = '.226563-18.601563-42.246094-18.65625l-30.';
const fL12 = '.09375c-13.355469-.339844-26.125-5.453125-36.';
const fL13 = '828126-11.804688-26';
const fL14 = '058594-';
const fL15 = '019531-14.410156l-87.347657-103.';
const fL16 = '835938c-.890624-1.0625-.824218-2.';
const fL17 = '601562.15625-3.582031.671876-.';
const fL18 = '2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.';
const fL19 = '945312-13.644531-19.242188-13.683594-30.';
const fL20 = '0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.';
const fL21 = '769531-18.789062-46.472656-.21875-.238281-.453126-.';
const fL22 = '464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.';
const fL23 = '0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.';

export const foodPath3 = (
  <path
    d={ `m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 
    18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156
    23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063
    3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2
    3.136719-2.855469
    ${fL10}${fL13}${fL11}${fL14}${fL12}${fL15}${fL16}${fL17}675781 1.460938-.773438
    1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375
    7.859374 20.648437
    7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906
    0 .003906-.003907c0 0
    .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375
    7.859375-20.648437
    0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844
    0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938
    87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844
    30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563
    12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719
    ${fL18}${fL19}988281l-.09375-30.140625c0-.054688
    ${fL20}${fL21}${fL22}0625-17.65625-5.609375-24.3125
    1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875
    1.875 1.875 4.925781 0 6.800781l-3.917969
    3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094
    2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188
    5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3
    2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875
    1.875-4.925781
    1.875-6.800781
    ${fL23}273437-12.726563-5.273437s-9.328125
    1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875
    24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0` }
  />
);