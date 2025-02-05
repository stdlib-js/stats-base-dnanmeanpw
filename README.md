<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dnanmeanpw

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6905c1fbb86fb9d9c958da1e70ae7132a1245ba0/lib/node_modules/@stdlib/stats/base/dnanmeanpw/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dnanmeanpw from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dnanmeanpw@esm/index.mjs';
```

#### dnanmeanpw( N, x, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array `x`, ignoring `NaN` values and using pairwise summation.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmeanpw( x.length, x, 1 );
// returns ~0.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [arithmetic mean][arithmetic-mean] of every other element:

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN ] );

var v = dnanmeanpw( 5, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dnanmeanpw( 5, x1, 2 );
// returns 1.25
```

#### dnanmeanpw.ndarray( N, x, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = dnanmeanpw.ndarray( x.length, x, 1, 0 );
// returns ~0.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [arithmetic mean][arithmetic-mean] for every other element starting from the second element:

<!-- eslint-disable max-len -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );

var v = dnanmeanpw.ndarray( 5, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If every indexed element is `NaN`, both functions return `NaN`.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs';
import dnanmeanpw from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dnanmeanpw@esm/index.mjs';

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = dnanmeanpw( x.length, x, 1 );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dnanmeanpw.h"
```

#### stdlib_strided_dnanmeanpw( N, \*X, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.

```c
const double x[] = { 1.0, -2.0, 0.0/0.0, 2.0 };

double v = stdlib_strided_dnanmeanpw( 4, x, 1 );
// returns ~0.3333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
double stdlib_strided_dnanmeanpw( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dnanmeanpw_ndarray( N, \*X, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 0.0/0.0, 2.0 };

double v = stdlib_strided_dnanmeanpw_ndarray( 4, x, 1, 0 );
// returns ~0.3333
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
double stdlib_strided_dnanmeanpw_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dnanmeanpw.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 0.0/0.0, 3.0, 0.0/0.0, 4.0, 5.0, 6.0, 0.0/0.0, 7.0, 8.0, 0.0/0.0 };

    // Specify the number of elements:
    const int N = 6;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the arithmetic mean:
    double v = stdlib_strided_dnanmeanpw( N, x, strideX );

    // Print the result:
    printf( "mean: %lf\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dmeanpw`][@stdlib/stats/base/dmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/stats-base/dnanmean`][@stdlib/stats/base/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dnanmeanpw.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dnanmeanpw

[test-image]: https://github.com/stdlib-js/stats-base-dnanmeanpw/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dnanmeanpw/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dnanmeanpw/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dnanmeanpw?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dnanmeanpw.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dnanmeanpw/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dnanmeanpw/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dnanmeanpw/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dnanmeanpw/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dnanmeanpw/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dnanmeanpw/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dnanmeanpw/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dnanmeanpw/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dnanmeanpw/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/stats/base/dmeanpw]: https://github.com/stdlib-js/stats-base-dmeanpw/tree/esm

[@stdlib/stats/base/dnanmean]: https://github.com/stdlib-js/stats-base-dnanmean/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
