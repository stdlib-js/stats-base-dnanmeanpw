/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var floor = require( '@stdlib/math-base-special-floor' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var Float64Array = require( '@stdlib/array-float64' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var dnanmeanpw = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dnanmeanpw instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnanmeanpw, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( dnanmeanpw.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the arithmetic mean of a strided array, ignoring `NaN` values', opts, function test( t ) {
	var x;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] );

	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( v, 0.5, 'returns expected value' );

	x = new Float64Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ); // eslint-disable-line max-len

	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( v, 0.5, 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN ] );

	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );

	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ 4.0 ] );
	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( v, 500500.0/x.length, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ); // eslint-disable-line max-len
	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = NaN;
	}
	v = dnanmeanpw( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanmeanpw( 0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dnanmeanpw( -1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanmeanpw( 1, x, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN   // 4
	]);

	N = floor( x.length / 2 );
	v = dnanmeanpw( N, x, 2, 0 );

	t.strictEqual( v, 1.25, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;
	var i;

	x = new Float64Array([
		1.0,  // 4
		2.0,
		2.0,  // 3
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 1
		2.0,
		NaN   // 0
	]);
	N = floor( x.length / 2 );

	v = dnanmeanpw( N, x, -2, 6 );
	t.strictEqual( v, 1.25, 'returns expected value' );

	x = new Float64Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = dnanmeanpw( x.length, x, -1, x.length-1 );
	t.strictEqual( v, 500500.0/x.length, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first indexed element', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanmeanpw( x.length, x, 0, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', opts, function test( t ) {
	var N;
	var x;
	var v;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);
	N = floor( x.length / 2 );

	v = dnanmeanpw( N, x, 2, 1 );
	t.strictEqual( v, 1.25, 'returns expected value' );

	t.end();
});
