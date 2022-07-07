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

#include "stdlib/stats/base/dsvariance.h"
#include "stdlib/stats/base/dsvariancepn.h"
#include <stdint.h>

/**
* Computes the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
double stdlib_strided_dsvariance( const int64_t N, const float correction, const float *X, const int64_t stride ) {
	return stdlib_strided_dsvariancepn( N, correction, X, stride );
}
