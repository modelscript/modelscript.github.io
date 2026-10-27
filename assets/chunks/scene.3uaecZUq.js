import{U as wt,c as gr,N as Lt,S as vr,C as Xe,R as Sr,e as Je,w as He,V as gt,l as Mi,M as en,F as Na,W as Ti,a as Ut,b as it,L as Ot,H as Ht,D as Tt,B as vt,d as hn,f as Ae,p as Er,g as mn,h as tn,i as mt,j as Yt,O as ya,P as un,k as li,m as fi,n as _n,o as Ai,q as xr,r as Qe,E as Mr,A as Tr,s as yn,t as nt,u as xt,v as jt,x as nn,y as gn,z as Kt,G as Ar,I as ln,J as an,K as dt,Q as vn,T as At,X as It,Y as Ln,Z as qt,_ as Fa,$ as Rr,a0 as Jt,a1 as Ri,a2 as br,a3 as Cr,a4 as on,a5 as Pr,a6 as wr,a7 as Lr,a8 as Ur,a9 as Dr,aa as Ir,ab as Nr,ac as yr,ad as Fr,ae as Or,af as Br,ag as Gr,ah as Hr,ai as Vr,aj as kr,ak as Wr,al as kt,am as Fn,an as xn,ao as zr,ap as Xt,aq as Xr,ar as Yr,as as di,at as qr,au as ui,av as Kr,aw as $r,ax as Zr,ay as Oe,az as ni,aA as Qr,aB as Jr,aC as bn,aD as jr,aE as fn,aF as Bt,aG as eo,aH as Oa,aI as Ba,aJ as Ga,aK as wn,aL as Ha,aM as Va,aN as ka,aO as pn,aP as to,aQ as no,aR as io,aS as ao,aT as Wa,aU as ro,aV as oo,aW as so,aX as On,aY as Bn,aZ as Gn,a_ as Hn,a$ as bi,b0 as Ci,b1 as Pi,b2 as wi,b3 as Li,b4 as Ui,b5 as Di,b6 as Ii,b7 as Ni,b8 as ii,b9 as yi,ba as Fi,bb as Oi,bc as Bi,bd as Gi,be as Hi,bf as Vi,bg as ki,bh as Wi,bi as zi,bj as Xi,bk as Yi,bl as qi,bm as Ki,bn as $i,bo as Zi,bp as Qi,bq as Ji,br as ji,bs as ea,bt as ai,bu as ta,bv as co,bw as lo,bx as fo,by as uo,bz as po,bA as ho,bB as mo,bC as _o,bD as na,bE as go,bF as Cn,bG as vo,bH as ia,bI as aa,bJ as ra,bK as za,bL as So,bM as oa,bN as Eo,bO as Xa,bP as ri,bQ as Ya,bR as xo,bS as qa,bT as Ka,bU as $a,bV as pi,bW as Za,bX as Qa,bY as Ja,bZ as sa,b_ as ja,b$ as Vn,c0 as kn,c1 as Mo,c2 as To,c3 as ca,c4 as _t,c5 as Ao,c6 as Ro,c7 as bo,c8 as Co,c9 as Po,ca as wo,cb as Lo,cc as Uo,cd as Do,ce as Io,cf as er,cg as No,ch as Mn,ci as Wn,cj as zn,ck as yo,cl as Xn,cm as Fo,cn as Oo,co as Bo,cp as Yn,cq as Go,cr as Ho,cs as Vo,ct as ko,cu as Wo,cv as zo,cw as qn,cx as Xo,cy as Yo,cz as qo,cA as Ko}from"./TurbineHero.CyCIMDSH.js";import"./framework.OnpWQ13d.js";import"./theme.D4OQpVPa.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tr(){let e=null,n=!1,t=null,i=null;function o(r,f){t(r,f),i=e.requestAnimationFrame(o)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(o),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function $o(e){const n=new WeakMap;function t(h,x){const g=h.array,I=h.usage,C=g.byteLength,p=e.createBuffer();e.bindBuffer(x,p),e.bufferData(x,g,I),h.onUploadCallback();let m;if(g instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)m=e.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)m=e.SHORT;else if(g instanceof Uint32Array)m=e.UNSIGNED_INT;else if(g instanceof Int32Array)m=e.INT;else if(g instanceof Int8Array)m=e.BYTE;else if(g instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:p,type:m,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:C}}function i(h,x,g){const I=x.array,C=x.updateRanges;if(e.bindBuffer(g,h),C.length===0)e.bufferSubData(g,0,I);else{C.sort((m,P)=>m.start-P.start);let p=0;for(let m=1;m<C.length;m++){const P=C[p],D=C[m];D.start<=P.start+P.count+1?P.count=Math.max(P.count,D.start+D.count-P.start):(++p,C[p]=D)}C.length=p+1;for(let m=0,P=C.length;m<P;m++){const D=C[m];e.bufferSubData(g,D.start*I.BYTES_PER_ELEMENT,I,D.start,D.count)}x.clearUpdateRanges()}x.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const x=n.get(h);x&&(e.deleteBuffer(x.buffer),n.delete(h))}function f(h,x){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const I=n.get(h);(!I||I.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=n.get(h);if(g===void 0)n.set(h,t(h,x));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,h,x),g.version=h.version}}return{get:o,remove:r,update:f}}var Zo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,es=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ts=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ns=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,is=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,as=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,os=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ss=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ls=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fs=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ds=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,us=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ps=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ms=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_s=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gs=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vs=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ss=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Es=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xs=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ms=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ts=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,As=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rs=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bs="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ps=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ws=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ls=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Us=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ds=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Is=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ns=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ys=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Os=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hs=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ks=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ws=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ys=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ks=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$s=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qs=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Js=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,js=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ec=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ic=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ac=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_c=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ec=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ac=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ic=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$c=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,el=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,il=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,al=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ol=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ll=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ul=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ml=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_l=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,El=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ml=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Al=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Zo,alphahash_pars_fragment:Qo,alphamap_fragment:Jo,alphamap_pars_fragment:jo,alphatest_fragment:es,alphatest_pars_fragment:ts,aomap_fragment:ns,aomap_pars_fragment:is,batching_pars_vertex:as,batching_vertex:rs,begin_vertex:os,beginnormal_vertex:ss,bsdfs:cs,iridescence_fragment:ls,bumpmap_pars_fragment:fs,clipping_planes_fragment:ds,clipping_planes_pars_fragment:us,clipping_planes_pars_vertex:ps,clipping_planes_vertex:hs,color_fragment:ms,color_pars_fragment:_s,color_pars_vertex:gs,color_vertex:vs,common:Ss,cube_uv_reflection_fragment:Es,defaultnormal_vertex:xs,displacementmap_pars_vertex:Ms,displacementmap_vertex:Ts,emissivemap_fragment:As,emissivemap_pars_fragment:Rs,colorspace_fragment:bs,colorspace_pars_fragment:Cs,envmap_fragment:Ps,envmap_common_pars_fragment:ws,envmap_pars_fragment:Ls,envmap_pars_vertex:Us,envmap_physical_pars_fragment:ks,envmap_vertex:Ds,fog_vertex:Is,fog_pars_vertex:Ns,fog_fragment:ys,fog_pars_fragment:Fs,gradientmap_pars_fragment:Os,lightmap_pars_fragment:Bs,lights_lambert_fragment:Gs,lights_lambert_pars_fragment:Hs,lights_pars_begin:Vs,lights_toon_fragment:Ws,lights_toon_pars_fragment:zs,lights_phong_fragment:Xs,lights_phong_pars_fragment:Ys,lights_physical_fragment:qs,lights_physical_pars_fragment:Ks,lights_fragment_begin:$s,lights_fragment_maps:Zs,lights_fragment_end:Qs,lightprobes_pars_fragment:Js,logdepthbuf_fragment:js,logdepthbuf_pars_fragment:ec,logdepthbuf_pars_vertex:tc,logdepthbuf_vertex:nc,map_fragment:ic,map_pars_fragment:ac,map_particle_fragment:rc,map_particle_pars_fragment:oc,metalnessmap_fragment:sc,metalnessmap_pars_fragment:cc,morphinstance_vertex:lc,morphcolor_vertex:fc,morphnormal_vertex:dc,morphtarget_pars_vertex:uc,morphtarget_vertex:pc,normal_fragment_begin:hc,normal_fragment_maps:mc,normal_pars_fragment:_c,normal_pars_vertex:gc,normal_vertex:vc,normalmap_pars_fragment:Sc,clearcoat_normal_fragment_begin:Ec,clearcoat_normal_fragment_maps:xc,clearcoat_pars_fragment:Mc,iridescence_pars_fragment:Tc,opaque_fragment:Ac,packing:Rc,premultiplied_alpha_fragment:bc,project_vertex:Cc,dithering_fragment:Pc,dithering_pars_fragment:wc,roughnessmap_fragment:Lc,roughnessmap_pars_fragment:Uc,shadowmap_pars_fragment:Dc,shadowmap_pars_vertex:Ic,shadowmap_vertex:Nc,shadowmask_pars_fragment:yc,skinbase_vertex:Fc,skinning_pars_vertex:Oc,skinning_vertex:Bc,skinnormal_vertex:Gc,specularmap_fragment:Hc,specularmap_pars_fragment:Vc,tonemapping_fragment:kc,tonemapping_pars_fragment:Wc,transmission_fragment:zc,transmission_pars_fragment:Xc,uv_pars_fragment:Yc,uv_pars_vertex:qc,uv_vertex:Kc,worldpos_vertex:$c,background_vert:Zc,background_frag:Qc,backgroundCube_vert:Jc,backgroundCube_frag:jc,cube_vert:el,cube_frag:tl,depth_vert:nl,depth_frag:il,distance_vert:al,distance_frag:rl,equirect_vert:ol,equirect_frag:sl,linedashed_vert:cl,linedashed_frag:ll,meshbasic_vert:fl,meshbasic_frag:dl,meshlambert_vert:ul,meshlambert_frag:pl,meshmatcap_vert:hl,meshmatcap_frag:ml,meshnormal_vert:_l,meshnormal_frag:gl,meshphong_vert:vl,meshphong_frag:Sl,meshphysical_vert:El,meshphysical_frag:xl,meshtoon_vert:Ml,meshtoon_frag:Tl,points_vert:Al,points_frag:Rl,shadow_vert:bl,shadow_frag:Cl,sprite_vert:Pl,sprite_frag:wl},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ae},probesMax:{value:new Ae},probesResolution:{value:new Ae}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Pt={basic:{uniforms:_t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:_t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:_t([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:_t([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:_t([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:_t([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:_t([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:_t([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:_t([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:_t([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:_t([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:_t([oe.common,oe.displacementmap,{referencePosition:{value:new Ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:_t([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Pt.physical={uniforms:_t([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Tn={r:0,b:0,g:0},Ll=new en,nr=new Oe;nr.set(-1,0,0,0,1,0,0,0,1);function Ul(e,n,t,i,o,r){const f=new Xe(0);let h=o===!0?0:1,x,g,I=null,C=0,p=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const R=_.backgroundBlurriness>0;M=n.get(M,R)}return M}function P(_){let M=!1;const R=m(_);R===null?l(f,h):R&&R.isColor&&(l(R,1),M=!0);const B=e.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function D(_,M){const R=m(M);R&&(R.isCubeTexture||R.mapping===Ln)?(g===void 0&&(g=new mt(new li(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:ri(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,v,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ll.makeRotationFromEuler(M.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(nr),g.material.toneMapped=it.getTransfer(R.colorSpace)!==Qe,(I!==R||C!==R.version||p!==e.toneMapping)&&(g.material.needsUpdate=!0,I=R,C=R.version,p=e.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(x===void 0&&(x=new mt(new pn(2,2),new At({name:"BackgroundMaterial",uniforms:ri(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(x)),x.material.uniforms.t2D.value=R,x.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,x.material.toneMapped=it.getTransfer(R.colorSpace)!==Qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),x.material.uniforms.uvTransform.value.copy(R.matrix),(I!==R||C!==R.version||p!==e.toneMapping)&&(x.material.needsUpdate=!0,I=R,C=R.version,p=e.toneMapping),x.layers.enableAll(),_.unshift(x,x.geometry,x.material,0,0,null))}function l(_,M){_.getRGB(Tn,Xa(e)),t.buffers.color.setClear(Tn.r,Tn.g,Tn.b,M,r)}function c(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return f},setClearColor:function(_,M=1){f.set(_),h=M,l(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,l(f,h)},render:P,addToRenderList:D,dispose:c}}function Dl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},o=p(null);let r=o,f=!1;function h(b,V,Z,q,F){let G=!1;const H=C(b,q,Z,V);r!==H&&(r=H,g(r.object)),G=m(b,q,Z,F),G&&P(b,q,Z,F),F!==null&&n.update(F,e.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,R(b,V,Z,q),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function x(){return e.createVertexArray()}function g(b){return e.bindVertexArray(b)}function I(b){return e.deleteVertexArray(b)}function C(b,V,Z,q){const F=q.wireframe===!0;let G=i[V.id];G===void 0&&(G={},i[V.id]=G);const H=b.isInstancedMesh===!0?b.id:0;let Q=G[H];Q===void 0&&(Q={},G[H]=Q);let de=Q[Z.id];de===void 0&&(de={},Q[Z.id]=de);let ve=de[F];return ve===void 0&&(ve=p(x()),de[F]=ve),ve}function p(b){const V=[],Z=[],q=[];for(let F=0;F<t;F++)V[F]=0,Z[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:q,object:b,attributes:{},index:null}}function m(b,V,Z,q){const F=r.attributes,G=V.attributes;let H=0;const Q=Z.getAttributes();for(const de in Q)if(Q[de].location>=0){const Re=F[de];let xe=G[de];if(xe===void 0&&(de==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),de==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),Re===void 0||Re.attribute!==xe||xe&&Re.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==q}function P(b,V,Z,q){const F={},G=V.attributes;let H=0;const Q=Z.getAttributes();for(const de in Q)if(Q[de].location>=0){let Re=G[de];Re===void 0&&(de==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),de==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor));const xe={};xe.attribute=Re,Re&&Re.data&&(xe.data=Re.data),F[de]=xe,H++}r.attributes=F,r.attributesNum=H,r.index=q}function D(){const b=r.newAttributes;for(let V=0,Z=b.length;V<Z;V++)b[V]=0}function l(b){c(b,0)}function c(b,V){const Z=r.newAttributes,q=r.enabledAttributes,F=r.attributeDivisors;Z[b]=1,q[b]===0&&(e.enableVertexAttribArray(b),q[b]=1),F[b]!==V&&(e.vertexAttribDivisor(b,V),F[b]=V)}function _(){const b=r.newAttributes,V=r.enabledAttributes;for(let Z=0,q=V.length;Z<q;Z++)V[Z]!==b[Z]&&(e.disableVertexAttribArray(Z),V[Z]=0)}function M(b,V,Z,q,F,G,H){H===!0?e.vertexAttribIPointer(b,V,Z,F,G):e.vertexAttribPointer(b,V,Z,q,F,G)}function R(b,V,Z,q){D();const F=q.attributes,G=Z.getAttributes(),H=V.defaultAttributeValues;for(const Q in G){const de=G[Q];if(de.location>=0){let ve=F[Q];if(ve===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ve!==void 0){const Re=ve.normalized,xe=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const Ke=Ve.buffer,Ie=Ve.type,Y=Ve.bytesPerElement,le=Ie===e.INT||Ie===e.UNSIGNED_INT||ve.gpuType===Wa;if(ve.isInterleavedBufferAttribute){const te=ve.data,Me=te.stride,Ce=ve.offset;if(te.isInstancedInterleavedBuffer){for(let Te=0;Te<de.locationSize;Te++)c(de.location+Te,te.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Te=0;Te<de.locationSize;Te++)l(de.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let Te=0;Te<de.locationSize;Te++)M(de.location+Te,xe/de.locationSize,Ie,Re,Me*Y,(Ce+xe/de.locationSize*Te)*Y,le)}else{if(ve.isInstancedBufferAttribute){for(let te=0;te<de.locationSize;te++)c(de.location+te,ve.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let te=0;te<de.locationSize;te++)l(de.location+te);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let te=0;te<de.locationSize;te++)M(de.location+te,xe/de.locationSize,Ie,Re,xe*Y,xe/de.locationSize*te*Y,le)}}else if(H!==void 0){const Re=H[Q];if(Re!==void 0)switch(Re.length){case 2:e.vertexAttrib2fv(de.location,Re);break;case 3:e.vertexAttrib3fv(de.location,Re);break;case 4:e.vertexAttrib4fv(de.location,Re);break;default:e.vertexAttrib1fv(de.location,Re)}}}}_()}function B(){E();for(const b in i){const V=i[b];for(const Z in V){const q=V[Z];for(const F in q){const G=q[F];for(const H in G)I(G[H].object),delete G[H];delete q[F]}}delete i[b]}}function v(b){if(i[b.id]===void 0)return;const V=i[b.id];for(const Z in V){const q=V[Z];for(const F in q){const G=q[F];for(const H in G)I(G[H].object),delete G[H];delete q[F]}}delete i[b.id]}function y(b){for(const V in i){const Z=i[V];for(const q in Z){const F=Z[q];if(F[b.id]===void 0)continue;const G=F[b.id];for(const H in G)I(G[H].object),delete G[H];delete F[b.id]}}}function u(b){for(const V in i){const Z=i[V],q=b.isInstancedMesh===!0?b.id:0,F=Z[q];if(F!==void 0){for(const G in F){const H=F[G];for(const Q in H)I(H[Q].object),delete H[Q];delete F[G]}delete Z[q],Object.keys(Z).length===0&&delete i[V]}}}function E(){O(),f=!0,r!==o&&(r=o,g(r.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:E,resetDefaultState:O,dispose:B,releaseStatesOfGeometry:v,releaseStatesOfObject:u,releaseStatesOfProgram:y,initAttributes:D,enableAttribute:l,disableUnusedAttributes:_}}function Il(e,n,t){let i;function o(x){i=x}function r(x,g){e.drawArrays(i,x,g),t.update(g,i,1)}function f(x,g,I){I!==0&&(e.drawArraysInstanced(i,x,g,I),t.update(g,i,I))}function h(x,g,I){if(I===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,x,0,g,0,I);let p=0;for(let m=0;m<I;m++)p+=g[m];t.update(p,i,1)}this.setMode=o,this.render=r,this.renderInstances=f,this.renderMultiDraw=h}function Nl(e,n,t,i){let o;function r(){if(o!==void 0)return o;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");o=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(y){return!(y!==xt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(y){const u=y===Ht&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==wt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Bt&&!u)}function x(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const I=x(g);I!==g&&(He("WebGLRenderer:",g,"not supported, using",I,"instead."),g=I);const C=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:x,textureFormatReadable:f,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:C,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:P,maxTextureSize:D,maxCubemapSize:l,maxAttributes:c,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:R,maxSamples:B,samples:v}}function yl(e){const n=this;let t=null,i=0,o=!1,r=!1;const f=new ni,h=new Oe,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(C,p){const m=C.length!==0||p||i!==0||o;return o=p,i=C.length,m},this.beginShadows=function(){r=!0,I(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(C,p){t=I(C,p,0)},this.setState=function(C,p,m){const P=C.clippingPlanes,D=C.clipIntersection,l=C.clipShadows,c=e.get(C);if(!o||P===null||P.length===0||r&&!l)r?I(null):g();else{const _=r?0:i,M=_*4;let R=c.clippingState||null;x.value=R,R=I(P,p,M,m);for(let B=0;B!==M;++B)R[B]=t[B];c.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=_}};function g(){x.value!==t&&(x.value=t,x.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function I(C,p,m,P){const D=C!==null?C.length:0;let l=null;if(D!==0){if(l=x.value,P!==!0||l===null){const c=m+D*4,_=p.matrixWorldInverse;h.getNormalMatrix(_),(l===null||l.length<c)&&(l=new Float32Array(c));for(let M=0,R=m;M!==D;++M,R+=4)f.copy(C[M]).applyMatrix4(_,h),f.normal.toArray(l,R),l[R+3]=f.constant}x.value=l,x.needsUpdate=!0}return n.numPlanes=D,n.numIntersection=0,l}}const Gt=4,la=[.125,.215,.35,.446,.526,.582],Wt=20,Fl=256,sn=new ya,fa=new Xe;let Kn=null,$n=0,Zn=0,Qn=!1;const Ol=new Ae;class oi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,o=100,r={}){const{size:f=256,position:h=Ol}=r;Kn=this._renderer.getRenderTarget(),$n=this._renderer.getActiveCubeFace(),Zn=this._renderer.getActiveMipmapLevel(),Qn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(n,i,o,x,h),t>0&&this._blur(x,0,0,t),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Kn,$n,Zn),this._renderer.xr.enabled=Qn,n.scissorTest=!1,Qt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===mn||n.mapping===tn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Kn=this._renderer.getRenderTarget(),$n=this._renderer.getActiveCubeFace(),Zn=this._renderer.getActiveMipmapLevel(),Qn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:Ht,format:xt,colorSpace:Fa,depthBuffer:!1},o=da(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bl(r)),this._blurMaterial=Hl(r,n,t),this._ggxMaterial=Gl(r,n,t)}return o}_compileMaterial(n){const t=new mt(new Yt,n);this._renderer.compile(t,sn)}_sceneToCubeUV(n,t,i,o,r){const x=new un(90,1,t,i),g=[1,-1,1,1,1,1],I=[1,1,1,-1,-1,-1],C=this._renderer,p=C.autoClear,m=C.toneMapping;C.getClearColor(fa),C.toneMapping=Lt,C.autoClear=!1,C.state.buffers.depth.getReversed()&&(C.setRenderTarget(o),C.clearDepth(),C.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new li,new fi({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,l=D.material;let c=!1;const _=n.background;_?_.isColor&&(l.color.copy(_),n.background=null,c=!0):(l.color.copy(fa),c=!0);for(let M=0;M<6;M++){const R=M%3;R===0?(x.up.set(0,g[M],0),x.position.set(r.x,r.y,r.z),x.lookAt(r.x+I[M],r.y,r.z)):R===1?(x.up.set(0,0,g[M]),x.position.set(r.x,r.y,r.z),x.lookAt(r.x,r.y+I[M],r.z)):(x.up.set(0,g[M],0),x.position.set(r.x,r.y,r.z),x.lookAt(r.x,r.y,r.z+I[M]));const B=this._cubeSize;Qt(o,R*B,M>2?B:0,B,B),C.setRenderTarget(o),c&&C.render(D,x),C.render(n,x)}C.toneMapping=m,C.autoClear=p,n.background=_}_textureToCubeUV(n,t){const i=this._renderer,o=n.mapping===mn||n.mapping===tn;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const r=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=r;const h=r.uniforms;h.envMap.value=n;const x=this._cubeSize;Qt(t,0,0,3*x,2*x),i.setRenderTarget(t),i.render(f,sn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let r=1;r<o;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const o=this._renderer,r=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[i];h.material=f;const x=f.uniforms,g=i/(this._lodMeshes.length-1),I=t/(this._lodMeshes.length-1),C=Math.sqrt(g*g-I*I),p=0+g*1.25,m=C*p,{_lodMax:P}=this,D=this._sizeLods[i],l=3*D*(i>P-Gt?i-P+Gt:0),c=4*(this._cubeSize-D);x.envMap.value=n.texture,x.roughness.value=m,x.mipInt.value=P-t,Qt(r,l,c,3*D,2*D),o.setRenderTarget(r),o.render(h,sn),x.envMap.value=r.texture,x.roughness.value=0,x.mipInt.value=P-i,Qt(n,l,c,3*D,2*D),o.setRenderTarget(n),o.render(h,sn)}_blur(n,t,i,o,r){const f=this._pingPongRenderTarget;this._halfBlur(n,f,t,i,o,"latitudinal",r),this._halfBlur(f,n,i,i,o,"longitudinal",r)}_halfBlur(n,t,i,o,r,f,h){const x=this._renderer,g=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const I=3,C=this._lodMeshes[o];C.material=g;const p=g.uniforms,m=this._sizeLods[i]-1,P=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wt-1),D=r/P,l=isFinite(r)?1+Math.floor(I*D):Wt;l>Wt&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Wt}`);const c=[];let _=0;for(let y=0;y<Wt;++y){const u=y/D,E=Math.exp(-u*u/2);c.push(E),y===0?_+=E:y<l&&(_+=2*E)}for(let y=0;y<c.length;y++)c[y]=c[y]/_;p.envMap.value=n.texture,p.samples.value=l,p.weights.value=c,p.latitudinal.value=f==="latitudinal",h&&(p.poleAxis.value=h);const{_lodMax:M}=this;p.dTheta.value=P,p.mipInt.value=M-i;const R=this._sizeLods[o],B=3*R*(o>M-Gt?o-M+Gt:0),v=4*(this._cubeSize-R);Qt(t,B,v,3*R,2*R),x.setRenderTarget(t),x.render(C,sn)}}function Bl(e){const n=[],t=[],i=[];let o=e;const r=e-Gt+1+la.length;for(let f=0;f<r;f++){const h=Math.pow(2,o);n.push(h);let x=1/h;f>e-Gt?x=la[f-e+Gt-1]:f===0&&(x=0),t.push(x);const g=1/(h-2),I=-g,C=1+g,p=[I,I,C,I,C,C,I,I,C,C,I,C],m=6,P=6,D=3,l=2,c=1,_=new Float32Array(D*P*m),M=new Float32Array(l*P*m),R=new Float32Array(c*P*m);for(let v=0;v<m;v++){const y=v%3*2/3-1,u=v>2?0:-1,E=[y,u,0,y+2/3,u,0,y+2/3,u+1,0,y,u,0,y+2/3,u+1,0,y,u+1,0];_.set(E,D*P*v),M.set(p,l*P*v);const O=[v,v,v,v,v,v];R.set(O,c*P*v)}const B=new Yt;B.setAttribute("position",new qt(_,D)),B.setAttribute("uv",new qt(M,l)),B.setAttribute("faceIndex",new qt(R,c)),i.push(new mt(B,null)),o>Gt&&o--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function da(e,n,t){const i=new Ut(e,n,t);return i.texture.mapping=Ln,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qt(e,n,t,i,o){e.viewport.set(n,t,i,o),e.scissor.set(n,t,i,o)}function Gl(e,n,t){return new At({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fl,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Un(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Hl(e,n,t){const i=new Float32Array(Wt),o=new Ae(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Wt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Un(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function ua(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Un(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function pa(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Un(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Un(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ir extends Ut{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},o=[i,i,i,i,i,i];this.texture=new Ya(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new li(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vt,blending:It});r.uniforms.tEquirect.value=t;const f=new mt(o,r),h=t.minFilter;return t.minFilter===Ot&&(t.minFilter=dt),new xo(1,10,this).update(n,f),t.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(n,t=!0,i=!0,o=!0){const r=n.getRenderTarget();for(let f=0;f<6;f++)n.setRenderTarget(this,f),n.clear(t,i,o);n.setRenderTarget(r)}}function Vl(e){let n=new WeakMap,t=new WeakMap,i=null;function o(p,m=!1){return p==null?null:m?f(p):r(p)}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===Vn||m===kn)if(n.has(p)){const P=n.get(p).texture;return h(P,p.mapping)}else{const P=p.image;if(P&&P.height>0){const D=new ir(P.height);return D.fromEquirectangularTexture(e,p),n.set(p,D),p.addEventListener("dispose",g),h(D.texture,p.mapping)}else return null}}return p}function f(p){if(p&&p.isTexture){const m=p.mapping,P=m===Vn||m===kn,D=m===mn||m===tn;if(P||D){let l=t.get(p);const c=l!==void 0?l.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==c)return i===null&&(i=new oi(e)),l=P?i.fromEquirectangular(p,l):i.fromCubemap(p,l),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),l.texture;if(l!==void 0)return l.texture;{const _=p.image;return P&&_&&_.height>0||D&&_&&x(_)?(i===null&&(i=new oi(e)),l=P?i.fromEquirectangular(p):i.fromCubemap(p),l.texture.pmremVersion=p.pmremVersion,t.set(p,l),p.addEventListener("dispose",I),l.texture):null}}}return p}function h(p,m){return m===Vn?p.mapping=mn:m===kn&&(p.mapping=tn),p}function x(p){let m=0;const P=6;for(let D=0;D<P;D++)p[D]!==void 0&&m++;return m===P}function g(p){const m=p.target;m.removeEventListener("dispose",g);const P=n.get(m);P!==void 0&&(n.delete(m),P.dispose())}function I(p){const m=p.target;m.removeEventListener("dispose",I);const P=t.get(m);P!==void 0&&(t.delete(m),P.dispose())}function C(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:C}}function kl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const o=e.getExtension(i);return n[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Rr("WebGLRenderer: "+i+" extension not supported."),o}}}function Wl(e,n,t,i){const o={},r=new WeakMap;function f(C){const p=C.target;p.index!==null&&n.remove(p.index);for(const P in p.attributes)n.remove(p.attributes[P]);p.removeEventListener("dispose",f),delete o[p.id];const m=r.get(p);m&&(n.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function h(C,p){return o[p.id]===!0||(p.addEventListener("dispose",f),o[p.id]=!0,t.memory.geometries++),p}function x(C){const p=C.attributes;for(const m in p)n.update(p[m],e.ARRAY_BUFFER)}function g(C){const p=[],m=C.index,P=C.attributes.position;let D=0;if(P===void 0)return;if(m!==null){const _=m.array;D=m.version;for(let M=0,R=_.length;M<R;M+=3){const B=_[M+0],v=_[M+1],y=_[M+2];p.push(B,v,v,y,y,B)}}else{const _=P.array;D=P.version;for(let M=0,R=_.length/3-1;M<R;M+=3){const B=M+0,v=M+1,y=M+2;p.push(B,v,v,y,y,B)}}const l=new(P.count>=65535?Mo:To)(p,1);l.version=D;const c=r.get(C);c&&n.remove(c),r.set(C,l)}function I(C){const p=r.get(C);if(p){const m=C.index;m!==null&&p.version<m.version&&g(C)}else g(C);return r.get(C)}return{get:h,update:x,getWireframeAttribute:I}}function zl(e,n,t){let i;function o(C){i=C}let r,f;function h(C){r=C.type,f=C.bytesPerElement}function x(C,p){e.drawElements(i,p,r,C*f),t.update(p,i,1)}function g(C,p,m){m!==0&&(e.drawElementsInstanced(i,p,r,C*f,m),t.update(p,i,m))}function I(C,p,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,C,0,m);let D=0;for(let l=0;l<m;l++)D+=p[l];t.update(D,i,1)}this.setMode=o,this.setIndex=h,this.render=x,this.renderInstances=g,this.renderMultiDraw=I}function Xl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,f,h){switch(t.calls++,f){case e.TRIANGLES:t.triangles+=h*(r/3);break;case e.LINES:t.lines+=h*(r/2);break;case e.LINE_STRIP:t.lines+=h*(r-1);break;case e.LINE_LOOP:t.lines+=h*r;break;case e.POINTS:t.points+=h*r;break;default:Je("WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:i}}function Yl(e,n,t){const i=new WeakMap,o=new gt;function r(f,h,x){const g=f.morphTargetInfluences,I=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,C=I!==void 0?I.length:0;let p=i.get(h);if(p===void 0||p.count!==C){let E=function(){y.dispose(),i.delete(h),h.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,l=h.morphAttributes.position||[],c=h.morphAttributes.normal||[],_=h.morphAttributes.color||[];let M=0;m===!0&&(M=1),P===!0&&(M=2),D===!0&&(M=3);let R=h.attributes.position.count*M,B=1;R>n.maxTextureSize&&(B=Math.ceil(R/n.maxTextureSize),R=n.maxTextureSize);const v=new Float32Array(R*B*4*C),y=new za(v,R,B,C);y.type=Bt,y.needsUpdate=!0;const u=M*4;for(let O=0;O<C;O++){const b=l[O],V=c[O],Z=_[O],q=R*B*4*O;for(let F=0;F<b.count;F++){const G=F*u;m===!0&&(o.fromBufferAttribute(b,F),v[q+G+0]=o.x,v[q+G+1]=o.y,v[q+G+2]=o.z,v[q+G+3]=0),P===!0&&(o.fromBufferAttribute(V,F),v[q+G+4]=o.x,v[q+G+5]=o.y,v[q+G+6]=o.z,v[q+G+7]=0),D===!0&&(o.fromBufferAttribute(Z,F),v[q+G+8]=o.x,v[q+G+9]=o.y,v[q+G+10]=o.z,v[q+G+11]=Z.itemSize===4?o.w:1)}}p={count:C,texture:y,size:new nt(R,B)},i.set(h,p),h.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)x.getUniforms().setValue(e,"morphTexture",f.morphTexture,t);else{let m=0;for(let D=0;D<g.length;D++)m+=g[D];const P=h.morphTargetsRelative?1:1-m;x.getUniforms().setValue(e,"morphTargetBaseInfluence",P),x.getUniforms().setValue(e,"morphTargetInfluences",g)}x.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),x.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function ql(e,n,t,i,o){let r=new WeakMap;function f(g){const I=o.render.frame,C=g.geometry,p=n.get(g,C);if(r.get(p)!==I&&(n.update(p),r.set(p,I)),g.isInstancedMesh&&(g.hasEventListener("dispose",x)===!1&&g.addEventListener("dispose",x),r.get(g)!==I&&(t.update(g.instanceMatrix,e.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,e.ARRAY_BUFFER),r.set(g,I))),g.isSkinnedMesh){const m=g.skeleton;r.get(m)!==I&&(m.update(),r.set(m,I))}return p}function h(){r=new WeakMap}function x(g){const I=g.target;I.removeEventListener("dispose",x),i.releaseStatesOfObject(I),t.remove(I.instanceMatrix),I.instanceColor!==null&&t.remove(I.instanceColor)}return{update:f,dispose:h}}const Kl={[Ja]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[Za]:"CINEON_TONE_MAPPING",[pi]:"ACES_FILMIC_TONE_MAPPING",[$a]:"AGX_TONE_MAPPING",[Ka]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function $l(e,n,t,i,o){const r=new Ut(n,t,{type:e,depthBuffer:i,stencilBuffer:o,depthTexture:i?new _n(n,t):void 0}),f=new Ut(n,t,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),h=new Yt;h.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const x=new xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new mt(h,x),I=new ya(-1,1,1,-1,0,1);let C=null,p=null,m=!1,P,D=null,l=[],c=!1;this.setSize=function(_,M){r.setSize(_,M),f.setSize(_,M);for(let R=0;R<l.length;R++){const B=l[R];B.setSize&&B.setSize(_,M)}},this.setEffects=function(_){l=_,c=l.length>0&&l[0].isRenderPass===!0;const M=r.width,R=r.height;for(let B=0;B<l.length;B++){const v=l[B];v.setSize&&v.setSize(M,R)}},this.begin=function(_,M){if(m||_.toneMapping===Lt&&l.length===0)return!1;if(D=M,M!==null){const R=M.width,B=M.height;(r.width!==R||r.height!==B)&&this.setSize(R,B)}return c===!1&&_.setRenderTarget(r),P=_.toneMapping,_.toneMapping=Lt,!0},this.hasRenderPass=function(){return c},this.end=function(_,M){_.toneMapping=P,m=!0;let R=r,B=f;for(let v=0;v<l.length;v++){const y=l[v];if(y.enabled!==!1&&(y.render(_,B,R,M),y.needsSwap!==!1)){const u=R;R=B,B=u}}if(C!==_.outputColorSpace||p!==_.toneMapping){C=_.outputColorSpace,p=_.toneMapping,x.defines={},it.getTransfer(C)===Qe&&(x.defines.SRGB_TRANSFER="");const v=Kl[p];v&&(x.defines[v]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=R.texture,_.setRenderTarget(D),_.render(g,I),D=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),f.dispose(),h.dispose(),x.dispose()}}const ar=new Lo,si=new _n(1,1),rr=new za,or=new Ro,sr=new Ya,ha=[],ma=[],_a=new Float32Array(16),ga=new Float32Array(9),va=new Float32Array(4);function rn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const o=n*t;let r=ha[o];if(r===void 0&&(r=new Float32Array(o),ha[o]=r),n!==0){i.toArray(r,0);for(let f=1,h=0;f!==n;++f)h+=t,e[f].toArray(r,h)}return r}function ut(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function pt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Dn(e,n){let t=ma[n];t===void 0&&(t=new Int32Array(n),ma[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Zl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Ql(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ut(t,n))return;e.uniform2fv(this.addr,n),pt(t,n)}}function Jl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ut(t,n))return;e.uniform3fv(this.addr,n),pt(t,n)}}function jl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ut(t,n))return;e.uniform4fv(this.addr,n),pt(t,n)}}function ef(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ut(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),pt(t,n)}else{if(ut(t,i))return;va.set(i),e.uniformMatrix2fv(this.addr,!1,va),pt(t,i)}}function tf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ut(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),pt(t,n)}else{if(ut(t,i))return;ga.set(i),e.uniformMatrix3fv(this.addr,!1,ga),pt(t,i)}}function nf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ut(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),pt(t,n)}else{if(ut(t,i))return;_a.set(i),e.uniformMatrix4fv(this.addr,!1,_a),pt(t,i)}}function af(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function rf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ut(t,n))return;e.uniform2iv(this.addr,n),pt(t,n)}}function of(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ut(t,n))return;e.uniform3iv(this.addr,n),pt(t,n)}}function sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ut(t,n))return;e.uniform4iv(this.addr,n),pt(t,n)}}function cf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function lf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ut(t,n))return;e.uniform2uiv(this.addr,n),pt(t,n)}}function ff(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ut(t,n))return;e.uniform3uiv(this.addr,n),pt(t,n)}}function df(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ut(t,n))return;e.uniform4uiv(this.addr,n),pt(t,n)}}function uf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o);let r;this.type===e.SAMPLER_2D_SHADOW?(si.compareFunction=t.isReversedDepthBuffer()?di:ui,r=si):r=ar,t.setTexture2D(n||r,o)}function pf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(n||or,o)}function hf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(n||sr,o)}function mf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(n||rr,o)}function _f(e){switch(e){case 5126:return Zl;case 35664:return Ql;case 35665:return Jl;case 35666:return jl;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return af;case 35667:case 35671:return rf;case 35668:case 35672:return of;case 35669:case 35673:return sf;case 5125:return cf;case 36294:return lf;case 36295:return ff;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return hf;case 36289:case 36303:case 36311:case 36292:return mf}}function gf(e,n){e.uniform1fv(this.addr,n)}function vf(e,n){const t=rn(n,this.size,2);e.uniform2fv(this.addr,t)}function Sf(e,n){const t=rn(n,this.size,3);e.uniform3fv(this.addr,t)}function Ef(e,n){const t=rn(n,this.size,4);e.uniform4fv(this.addr,t)}function xf(e,n){const t=rn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Mf(e,n){const t=rn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Tf(e,n){const t=rn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Af(e,n){e.uniform1iv(this.addr,n)}function Rf(e,n){e.uniform2iv(this.addr,n)}function bf(e,n){e.uniform3iv(this.addr,n)}function Cf(e,n){e.uniform4iv(this.addr,n)}function Pf(e,n){e.uniform1uiv(this.addr,n)}function wf(e,n){e.uniform2uiv(this.addr,n)}function Lf(e,n){e.uniform3uiv(this.addr,n)}function Uf(e,n){e.uniform4uiv(this.addr,n)}function Df(e,n,t){const i=this.cache,o=n.length,r=Dn(t,o);ut(i,r)||(e.uniform1iv(this.addr,r),pt(i,r));let f;this.type===e.SAMPLER_2D_SHADOW?f=si:f=ar;for(let h=0;h!==o;++h)t.setTexture2D(n[h]||f,r[h])}function If(e,n,t){const i=this.cache,o=n.length,r=Dn(t,o);ut(i,r)||(e.uniform1iv(this.addr,r),pt(i,r));for(let f=0;f!==o;++f)t.setTexture3D(n[f]||or,r[f])}function Nf(e,n,t){const i=this.cache,o=n.length,r=Dn(t,o);ut(i,r)||(e.uniform1iv(this.addr,r),pt(i,r));for(let f=0;f!==o;++f)t.setTextureCube(n[f]||sr,r[f])}function yf(e,n,t){const i=this.cache,o=n.length,r=Dn(t,o);ut(i,r)||(e.uniform1iv(this.addr,r),pt(i,r));for(let f=0;f!==o;++f)t.setTexture2DArray(n[f]||rr,r[f])}function Ff(e){switch(e){case 5126:return gf;case 35664:return vf;case 35665:return Sf;case 35666:return Ef;case 35674:return xf;case 35675:return Mf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return bf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return wf;case 36295:return Lf;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return yf}}class Of{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class Bf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ff(t.type)}}class Gf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const o=this.seq;for(let r=0,f=o.length;r!==f;++r){const h=o[r];h.setValue(n,t[h.id],i)}}}const Jn=/(\w+)(\])?(\[|\.)?/g;function Sa(e,n){e.seq.push(n),e.map[n.id]=n}function Hf(e,n,t){const i=e.name,o=i.length;for(Jn.lastIndex=0;;){const r=Jn.exec(i),f=Jn.lastIndex;let h=r[1];const x=r[2]==="]",g=r[3];if(x&&(h=h|0),g===void 0||g==="["&&f+2===o){Sa(t,g===void 0?new Of(h,e,n):new Bf(h,e,n));break}else{let C=t.map[h];C===void 0&&(C=new Gf(h),Sa(t,C)),t=C}}}class Pn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let f=0;f<i;++f){const h=n.getActiveUniform(t,f),x=n.getUniformLocation(t,h.name);Hf(h,x,this)}const o=[],r=[];for(const f of this.seq)f.type===n.SAMPLER_2D_SHADOW||f.type===n.SAMPLER_CUBE_SHADOW||f.type===n.SAMPLER_2D_ARRAY_SHADOW?o.push(f):r.push(f);o.length>0&&(this.seq=o.concat(r))}setValue(n,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(n,i,o)}setOptional(n,t,i){const o=t[i];o!==void 0&&this.setValue(n,i,o)}static upload(n,t,i,o){for(let r=0,f=t.length;r!==f;++r){const h=t[r],x=i[h.id];x.needsUpdate!==!1&&h.setValue(n,x.value,o)}}static seqWithValue(n,t){const i=[];for(let o=0,r=n.length;o!==r;++o){const f=n[o];f.id in t&&i.push(f)}return i}}function Ea(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Vf=37297;let kf=0;function Wf(e,n){const t=e.split(`
`),i=[],o=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let f=o;f<r;f++){const h=f+1;i.push(`${h===n?">":" "} ${h}: ${t[f]}`)}return i.join(`
`)}const xa=new Oe;function zf(e){it._getMatrix(xa,it.workingColorSpace,e);const n=`mat3( ${xa.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case ja:return[n,"LinearTransferOETF"];case Qe:return[n,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ma(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const f=/ERROR: 0:(\d+)/.exec(r);if(f){const h=parseInt(f[1]);return t.toUpperCase()+`

`+r+`

`+Wf(e.getShaderSource(n),h)}else return r}function Xf(e,n){const t=zf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yf={[Ja]:"Linear",[Qa]:"Reinhard",[Za]:"Cineon",[pi]:"ACESFilmic",[$a]:"AgX",[Ka]:"Neutral",[qa]:"Custom"};function qf(e,n){const t=Yf[n];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const An=new Ae;function Kf(){it.getLuminanceCoefficients(An);const e=An.x.toFixed(4),n=An.y.toFixed(4),t=An.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $f(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dn).join(`
`)}function Zf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Qf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=e.getActiveAttrib(n,o),f=r.name;let h=1;r.type===e.FLOAT_MAT2&&(h=2),r.type===e.FLOAT_MAT3&&(h=3),r.type===e.FLOAT_MAT4&&(h=4),t[f]={type:r.type,location:e.getAttribLocation(n,f),locationSize:h}}return t}function dn(e){return e!==""}function Ta(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Aa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ci(e){return e.replace(Jf,ed)}const jf=new Map;function ed(e,n){let t=Ue[n];if(t===void 0){const i=jf.get(n);if(i!==void 0)t=Ue[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ci(t)}const td=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ra(e){return e.replace(td,nd)}function nd(e,n,t,i){let o="";for(let r=parseInt(n);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function ba(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const id={[bn]:"SHADOWMAP_TYPE_PCF",[fn]:"SHADOWMAP_TYPE_VSM"};function ad(e){return id[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rd={[mn]:"ENVMAP_TYPE_CUBE",[tn]:"ENVMAP_TYPE_CUBE",[Ln]:"ENVMAP_TYPE_CUBE_UV"};function od(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":rd[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const sd={[tn]:"ENVMAP_MODE_REFRACTION"};function cd(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":sd[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ld={[wo]:"ENVMAP_BLENDING_MULTIPLY",[Po]:"ENVMAP_BLENDING_MIX",[Co]:"ENVMAP_BLENDING_ADD"};function fd(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":ld[e.combine]||"ENVMAP_BLENDING_NONE"}function dd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ud(e,n,t,i){const o=e.getContext(),r=t.defines;let f=t.vertexShader,h=t.fragmentShader;const x=ad(t),g=od(t),I=cd(t),C=fd(t),p=dd(t),m=$f(t),P=Zf(r),D=o.createProgram();let l,c,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(dn).join(`
`),l.length>0&&(l+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(dn).join(`
`),c.length>0&&(c+=`
`)):(l=[ba(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+I:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dn).join(`
`),c=[ba(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+I:"",t.envMap?"#define "+C:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+x:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lt?"#define TONE_MAPPING":"",t.toneMapping!==Lt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Lt?qf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Xf("linearToOutputTexel",t.outputColorSpace),Kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dn).join(`
`)),f=ci(f),f=Ta(f,t),f=Aa(f,t),h=ci(h),h=Ta(h,t),h=Aa(h,t),f=Ra(f),h=Ra(h),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,l=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,c=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const M=_+l+f,R=_+c+h,B=Ea(o,o.VERTEX_SHADER,M),v=Ea(o,o.FRAGMENT_SHADER,R);o.attachShader(D,B),o.attachShader(D,v),t.index0AttributeName!==void 0?o.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function y(b){if(e.debug.checkShaderErrors){const V=o.getProgramInfoLog(D)||"",Z=o.getShaderInfoLog(B)||"",q=o.getShaderInfoLog(v)||"",F=V.trim(),G=Z.trim(),H=q.trim();let Q=!0,de=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,D,B,v);else{const ve=Ma(o,B,"vertex"),Re=Ma(o,v,"fragment");Je("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+ve+`
`+Re)}else F!==""?He("WebGLProgram: Program Info Log:",F):(G===""||H==="")&&(de=!1);de&&(b.diagnostics={runnable:Q,programLog:F,vertexShader:{log:G,prefix:l},fragmentShader:{log:H,prefix:c}})}o.deleteShader(B),o.deleteShader(v),u=new Pn(o,D),E=Qf(o,D)}let u;this.getUniforms=function(){return u===void 0&&y(this),u};let E;this.getAttributes=function(){return E===void 0&&y(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(D,Vf)),O},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kf++,this.cacheKey=n,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=v,this}let pd=0;class hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),f=this._getShaderCacheForMaterial(n);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(r)===!1&&(f.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new md(n),t.set(n,i)),i}}class md{constructor(n){this.id=pd++,this.code=n,this.usedTimes=0}}function _d(e){return e===an||e===ii||e===ai}function gd(e,n,t,i,o,r){const f=new Ao,h=new hd,x=new Set,g=[],I=new Map,C=i.logarithmicDepthBuffer;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(u){return x.add(u),u===0?"uv":`uv${u}`}function D(u,E,O,b,V,Z){const q=b.fog,F=V.geometry,G=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?b.environment:null,H=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap,Q=n.get(u.envMap||G,H),de=Q&&Q.mapping===Ln?Q.image.height:null,ve=m[u.type];u.precision!==null&&(p=i.getMaxPrecision(u.precision),p!==u.precision&&He("WebGLProgram.getParameters:",u.precision,"not supported, using",p,"instead."));const Re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=Re!==void 0?Re.length:0;let Ve=0;F.morphAttributes.position!==void 0&&(Ve=1),F.morphAttributes.normal!==void 0&&(Ve=2),F.morphAttributes.color!==void 0&&(Ve=3);let Ke,Ie,Y,le;if(ve){const Pe=Pt[ve];Ke=Pe.vertexShader,Ie=Pe.fragmentShader}else Ke=u.vertexShader,Ie=u.fragmentShader,h.update(u),Y=h.getVertexShaderID(u),le=h.getFragmentShaderID(u);const te=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Ce=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,et=!!u.map,ye=!!u.matcap,ke=!!Q,je=!!u.aoMap,Ne=!!u.lightMap,lt=!!u.bumpMap,tt=!!u.normalMap,St=!!u.displacementMap,T=!!u.emissiveMap,ft=!!u.metalnessMap,Fe=!!u.roughnessMap,$e=u.anisotropy>0,re=u.clearcoat>0,at=u.dispersion>0,d=u.iridescence>0,a=u.sheen>0,w=u.transmission>0,z=$e&&!!u.anisotropyMap,$=re&&!!u.clearcoatMap,J=re&&!!u.clearcoatNormalMap,ae=re&&!!u.clearcoatRoughnessMap,k=d&&!!u.iridescenceMap,X=d&&!!u.iridescenceThicknessMap,fe=a&&!!u.sheenColorMap,he=a&&!!u.sheenRoughnessMap,ne=!!u.specularMap,j=!!u.specularColorMap,be=!!u.specularIntensityMap,Le=w&&!!u.transmissionMap,Ge=w&&!!u.thicknessMap,S=!!u.gradientMap,ee=!!u.alphaMap,W=u.alphaTest>0,ue=!!u.alphaHash,ie=!!u.extensions;let K=Lt;u.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(K=e.toneMapping);const ge={shaderID:ve,shaderType:u.type,shaderName:u.name,vertexShader:Ke,fragmentShader:Ie,defines:u.defines,customVertexShaderID:Y,customFragmentShaderID:le,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!u.alphaToCoverage,map:et,matcap:ye,envMap:ke,envMapMode:ke&&Q.mapping,envMapCubeUVHeight:de,aoMap:je,lightMap:Ne,bumpMap:lt,normalMap:tt,displacementMap:St,emissiveMap:T,normalMapObjectSpace:tt&&u.normalMapType===Eo,normalMapTangentSpace:tt&&u.normalMapType===oa,packedNormalMap:tt&&u.normalMapType===oa&&_d(u.normalMap.format),metalnessMap:ft,roughnessMap:Fe,anisotropy:$e,anisotropyMap:z,clearcoat:re,clearcoatMap:$,clearcoatNormalMap:J,clearcoatRoughnessMap:ae,dispersion:at,iridescence:d,iridescenceMap:k,iridescenceThicknessMap:X,sheen:a,sheenColorMap:fe,sheenRoughnessMap:he,specularMap:ne,specularColorMap:j,specularIntensityMap:be,transmission:w,transmissionMap:Le,thicknessMap:Ge,gradientMap:S,opaque:u.transparent===!1&&u.blending===Cn&&u.alphaToCoverage===!1,alphaMap:ee,alphaTest:W,alphaHash:ue,combine:u.combine,mapUv:et&&P(u.map.channel),aoMapUv:je&&P(u.aoMap.channel),lightMapUv:Ne&&P(u.lightMap.channel),bumpMapUv:lt&&P(u.bumpMap.channel),normalMapUv:tt&&P(u.normalMap.channel),displacementMapUv:St&&P(u.displacementMap.channel),emissiveMapUv:T&&P(u.emissiveMap.channel),metalnessMapUv:ft&&P(u.metalnessMap.channel),roughnessMapUv:Fe&&P(u.roughnessMap.channel),anisotropyMapUv:z&&P(u.anisotropyMap.channel),clearcoatMapUv:$&&P(u.clearcoatMap.channel),clearcoatNormalMapUv:J&&P(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&P(u.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&P(u.iridescenceMap.channel),iridescenceThicknessMapUv:X&&P(u.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&P(u.sheenColorMap.channel),sheenRoughnessMapUv:he&&P(u.sheenRoughnessMap.channel),specularMapUv:ne&&P(u.specularMap.channel),specularColorMapUv:j&&P(u.specularColorMap.channel),specularIntensityMapUv:be&&P(u.specularIntensityMap.channel),transmissionMapUv:Le&&P(u.transmissionMap.channel),thicknessMapUv:Ge&&P(u.thicknessMap.channel),alphaMapUv:ee&&P(u.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(tt||$e),vertexNormals:!!F.attributes.normal,vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&(et||ee),fog:!!q,useFog:u.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:u.wireframe===!1&&(u.flatShading===!0||F.attributes.normal===void 0&&tt===!1&&(u.isMeshLambertMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isMeshPhysicalMaterial)),sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:C,reversedDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:u.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:K,decodeVideoTexture:et&&u.map.isVideoTexture===!0&&it.getTransfer(u.map.colorSpace)===Qe,decodeVideoTextureEmissive:T&&u.emissiveMap.isVideoTexture===!0&&it.getTransfer(u.emissiveMap.colorSpace)===Qe,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===Tt,flipSided:u.side===vt,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionClipCullDistance:ie&&u.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&u.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:u.customProgramCacheKey()};return ge.vertexUv1s=x.has(1),ge.vertexUv2s=x.has(2),ge.vertexUv3s=x.has(3),x.clear(),ge}function l(u){const E=[];if(u.shaderID?E.push(u.shaderID):(E.push(u.customVertexShaderID),E.push(u.customFragmentShaderID)),u.defines!==void 0)for(const O in u.defines)E.push(O),E.push(u.defines[O]);return u.isRawShaderMaterial===!1&&(c(E,u),_(E,u),E.push(e.outputColorSpace)),E.push(u.customProgramCacheKey),E.join()}function c(u,E){u.push(E.precision),u.push(E.outputColorSpace),u.push(E.envMapMode),u.push(E.envMapCubeUVHeight),u.push(E.mapUv),u.push(E.alphaMapUv),u.push(E.lightMapUv),u.push(E.aoMapUv),u.push(E.bumpMapUv),u.push(E.normalMapUv),u.push(E.displacementMapUv),u.push(E.emissiveMapUv),u.push(E.metalnessMapUv),u.push(E.roughnessMapUv),u.push(E.anisotropyMapUv),u.push(E.clearcoatMapUv),u.push(E.clearcoatNormalMapUv),u.push(E.clearcoatRoughnessMapUv),u.push(E.iridescenceMapUv),u.push(E.iridescenceThicknessMapUv),u.push(E.sheenColorMapUv),u.push(E.sheenRoughnessMapUv),u.push(E.specularMapUv),u.push(E.specularColorMapUv),u.push(E.specularIntensityMapUv),u.push(E.transmissionMapUv),u.push(E.thicknessMapUv),u.push(E.combine),u.push(E.fogExp2),u.push(E.sizeAttenuation),u.push(E.morphTargetsCount),u.push(E.morphAttributeCount),u.push(E.numDirLights),u.push(E.numPointLights),u.push(E.numSpotLights),u.push(E.numSpotLightMaps),u.push(E.numHemiLights),u.push(E.numRectAreaLights),u.push(E.numDirLightShadows),u.push(E.numPointLightShadows),u.push(E.numSpotLightShadows),u.push(E.numSpotLightShadowsWithMaps),u.push(E.numLightProbes),u.push(E.shadowMapType),u.push(E.toneMapping),u.push(E.numClippingPlanes),u.push(E.numClipIntersection),u.push(E.depthPacking)}function _(u,E){f.disableAll(),E.instancing&&f.enable(0),E.instancingColor&&f.enable(1),E.instancingMorph&&f.enable(2),E.matcap&&f.enable(3),E.envMap&&f.enable(4),E.normalMapObjectSpace&&f.enable(5),E.normalMapTangentSpace&&f.enable(6),E.clearcoat&&f.enable(7),E.iridescence&&f.enable(8),E.alphaTest&&f.enable(9),E.vertexColors&&f.enable(10),E.vertexAlphas&&f.enable(11),E.vertexUv1s&&f.enable(12),E.vertexUv2s&&f.enable(13),E.vertexUv3s&&f.enable(14),E.vertexTangents&&f.enable(15),E.anisotropy&&f.enable(16),E.alphaHash&&f.enable(17),E.batching&&f.enable(18),E.dispersion&&f.enable(19),E.batchingColor&&f.enable(20),E.gradientMap&&f.enable(21),E.packedNormalMap&&f.enable(22),E.vertexNormals&&f.enable(23),u.push(f.mask),f.disableAll(),E.fog&&f.enable(0),E.useFog&&f.enable(1),E.flatShading&&f.enable(2),E.logarithmicDepthBuffer&&f.enable(3),E.reversedDepthBuffer&&f.enable(4),E.skinning&&f.enable(5),E.morphTargets&&f.enable(6),E.morphNormals&&f.enable(7),E.morphColors&&f.enable(8),E.premultipliedAlpha&&f.enable(9),E.shadowMapEnabled&&f.enable(10),E.doubleSided&&f.enable(11),E.flipSided&&f.enable(12),E.useDepthPacking&&f.enable(13),E.dithering&&f.enable(14),E.transmission&&f.enable(15),E.sheen&&f.enable(16),E.opaque&&f.enable(17),E.pointsUvs&&f.enable(18),E.decodeVideoTexture&&f.enable(19),E.decodeVideoTextureEmissive&&f.enable(20),E.alphaToCoverage&&f.enable(21),E.numLightProbeGrids>0&&f.enable(22),u.push(f.mask)}function M(u){const E=m[u.type];let O;if(E){const b=Pt[E];O=So.clone(b.uniforms)}else O=u.uniforms;return O}function R(u,E){let O=I.get(E);return O!==void 0?++O.usedTimes:(O=new ud(e,E,u,o),g.push(O),I.set(E,O)),O}function B(u){if(--u.usedTimes===0){const E=g.indexOf(u);g[E]=g[g.length-1],g.pop(),I.delete(u.cacheKey),u.destroy()}}function v(u){h.remove(u)}function y(){h.dispose()}return{getParameters:D,getProgramCacheKey:l,getUniforms:M,acquireProgram:R,releaseProgram:B,releaseShaderCache:v,programs:g,dispose:y}}function vd(){let e=new WeakMap;function n(f){return e.has(f)}function t(f){let h=e.get(f);return h===void 0&&(h={},e.set(f,h)),h}function i(f){e.delete(f)}function o(f,h,x){e.get(f)[h]=x}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:o,dispose:r}}function Sd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Ca(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Pa(){const e=[];let n=0;const t=[],i=[],o=[];function r(){n=0,t.length=0,i.length=0,o.length=0}function f(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function h(p,m,P,D,l,c){let _=e[n];return _===void 0?(_={id:p.id,object:p,geometry:m,material:P,materialVariant:f(p),groupOrder:D,renderOrder:p.renderOrder,z:l,group:c},e[n]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=P,_.materialVariant=f(p),_.groupOrder=D,_.renderOrder=p.renderOrder,_.z=l,_.group=c),n++,_}function x(p,m,P,D,l,c){const _=h(p,m,P,D,l,c);P.transmission>0?i.push(_):P.transparent===!0?o.push(_):t.push(_)}function g(p,m,P,D,l,c){const _=h(p,m,P,D,l,c);P.transmission>0?i.unshift(_):P.transparent===!0?o.unshift(_):t.unshift(_)}function I(p,m){t.length>1&&t.sort(p||Sd),i.length>1&&i.sort(m||Ca),o.length>1&&o.sort(m||Ca)}function C(){for(let p=n,m=e.length;p<m;p++){const P=e[p];if(P.id===null)break;P.id=null,P.object=null,P.geometry=null,P.material=null,P.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:x,unshift:g,finish:C,sort:I}}function Ed(){let e=new WeakMap;function n(i,o){const r=e.get(i);let f;return r===void 0?(f=new Pa,e.set(i,[f])):o>=r.length?(f=new Pa,r.push(f)):f=r[o],f}function t(){e=new WeakMap}return{get:n,dispose:t}}function xd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ae,color:new Xe};break;case"SpotLight":t={position:new Ae,direction:new Ae,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ae,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ae,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new Ae,halfWidth:new Ae,halfHeight:new Ae};break}return e[n.id]=t,t}}}function Md(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Td=0;function Ad(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Rd(e){const n=new xd,t=Md(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Ae);const o=new Ae,r=new en,f=new en;function h(g){let I=0,C=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,P=0,D=0,l=0,c=0,_=0,M=0,R=0,B=0,v=0,y=0;g.sort(Ad);for(let E=0,O=g.length;E<O;E++){const b=g[E],V=b.color,Z=b.intensity,q=b.distance;let F=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===an?F=b.shadow.map.texture:F=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)I+=V.r*Z,C+=V.g*Z,p+=V.b*Z;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],Z);y++}else if(b.isDirectionalLight){const G=n.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,Q=t.get(b);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=b.shadow.matrix,_++}i.directional[m]=G,m++}else if(b.isSpotLight){const G=n.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(V).multiplyScalar(Z),G.distance=q,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[D]=G;const H=b.shadow;if(b.map&&(i.spotLightMap[B]=b.map,B++,H.updateMatrices(b),b.castShadow&&v++),i.spotLightMatrix[D]=H.matrix,b.castShadow){const Q=t.get(b);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,i.spotShadow[D]=Q,i.spotShadowMap[D]=F,R++}D++}else if(b.isRectAreaLight){const G=n.get(b);G.color.copy(V).multiplyScalar(Z),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[l]=G,l++}else if(b.isPointLight){const G=n.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const H=b.shadow,Q=t.get(b);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,i.pointShadow[P]=Q,i.pointShadowMap[P]=F,i.pointShadowMatrix[P]=b.shadow.matrix,M++}i.point[P]=G,P++}else if(b.isHemisphereLight){const G=n.get(b);G.skyColor.copy(b.color).multiplyScalar(Z),G.groundColor.copy(b.groundColor).multiplyScalar(Z),i.hemi[c]=G,c++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=I,i.ambient[1]=C,i.ambient[2]=p;const u=i.hash;(u.directionalLength!==m||u.pointLength!==P||u.spotLength!==D||u.rectAreaLength!==l||u.hemiLength!==c||u.numDirectionalShadows!==_||u.numPointShadows!==M||u.numSpotShadows!==R||u.numSpotMaps!==B||u.numLightProbes!==y)&&(i.directional.length=m,i.spot.length=D,i.rectArea.length=l,i.point.length=P,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+B-v,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=y,u.directionalLength=m,u.pointLength=P,u.spotLength=D,u.rectAreaLength=l,u.hemiLength=c,u.numDirectionalShadows=_,u.numPointShadows=M,u.numSpotShadows=R,u.numSpotMaps=B,u.numLightProbes=y,i.version=Td++)}function x(g,I){let C=0,p=0,m=0,P=0,D=0;const l=I.matrixWorldInverse;for(let c=0,_=g.length;c<_;c++){const M=g[c];if(M.isDirectionalLight){const R=i.directional[C];R.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(l),C++}else if(M.isSpotLight){const R=i.spot[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(l),R.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(l),m++}else if(M.isRectAreaLight){const R=i.rectArea[P];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(l),f.identity(),r.copy(M.matrixWorld),r.premultiply(l),f.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),P++}else if(M.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(l),p++}else if(M.isHemisphereLight){const R=i.hemi[D];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(l),D++}}}return{setup:h,setupView:x,state:i}}function wa(e){const n=new Rd(e),t=[],i=[],o=[];function r(p){C.camera=p,t.length=0,i.length=0,o.length=0}function f(p){t.push(p)}function h(p){i.push(p)}function x(p){o.push(p)}function g(){n.setup(t)}function I(p){n.setupView(t,p)}const C={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:C,setupLights:g,setupLightsView:I,pushLight:f,pushShadow:h,pushLightProbeGrid:x}}function bd(e){let n=new WeakMap;function t(o,r=0){const f=n.get(o);let h;return f===void 0?(h=new wa(e),n.set(o,[h])):r>=f.length?(h=new wa(e),f.push(h)):h=f[r],h}function i(){n=new WeakMap}return{get:t,dispose:i}}const Cd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wd=[new Ae(1,0,0),new Ae(-1,0,0),new Ae(0,1,0),new Ae(0,-1,0),new Ae(0,0,1),new Ae(0,0,-1)],Ld=[new Ae(0,-1,0),new Ae(0,-1,0),new Ae(0,0,1),new Ae(0,0,-1),new Ae(0,-1,0),new Ae(0,-1,0)],La=new en,cn=new Ae,jn=new Ae;function Ud(e,n,t){let i=new Na;const o=new nt,r=new nt,f=new gt,h=new Qr,x=new Jr,g={},I=t.maxTextureSize,C={[hn]:vt,[vt]:hn,[Tt]:Tt},p=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Cd,fragmentShader:Pd}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const P=new Yt;P.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new mt(P,p),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bn;let c=this.type;this.render=function(v,y,u){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||v.length===0)return;this.type===jr&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bn);const E=e.getRenderTarget(),O=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),V=e.state;V.setBlending(It),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=c!==this.type;Z&&y.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(F=>F.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,F=v.length;q<F;q++){const G=v[q],H=G.shadow;if(H===void 0){He("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const Q=H.getFrameExtents();o.multiply(Q),r.copy(H.mapSize),(o.x>I||o.y>I)&&(o.x>I&&(r.x=Math.floor(I/Q.x),o.x=r.x*Q.x,H.mapSize.x=r.x),o.y>I&&(r.y=Math.floor(I/Q.y),o.y=r.y*Q.y,H.mapSize.y=r.y));const de=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=de,H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fn){if(G.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ut(o.x,o.y,{format:an,type:Ht,minFilter:dt,magFilter:dt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new _n(o.x,o.y,Bt),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=nn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt}else G.isPointLight?(H.map=new ir(o.x),H.map.depthTexture=new eo(o.x,Kt)):(H.map=new Ut(o.x,o.y),H.map.depthTexture=new _n(o.x,o.y,Kt)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=nn,this.type===bn?(H.map.depthTexture.compareFunction=de?di:ui,H.map.depthTexture.minFilter=dt,H.map.depthTexture.magFilter=dt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt);H.camera.updateProjectionMatrix()}const ve=H.map.isWebGLCubeRenderTarget?6:1;for(let Re=0;Re<ve;Re++){if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,Re),e.clear();else{Re===0&&(e.setRenderTarget(H.map),e.clear());const xe=H.getViewport(Re);f.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),V.viewport(f)}if(G.isPointLight){const xe=H.camera,Ve=H.matrix,Ke=G.distance||xe.far;Ke!==xe.far&&(xe.far=Ke,xe.updateProjectionMatrix()),cn.setFromMatrixPosition(G.matrixWorld),xe.position.copy(cn),jn.copy(xe.position),jn.add(wd[Re]),xe.up.copy(Ld[Re]),xe.lookAt(jn),xe.updateMatrixWorld(),Ve.makeTranslation(-cn.x,-cn.y,-cn.z),La.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(La,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(G);i=H.getFrustum(),R(y,u,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&_(H,u),H.needsUpdate=!1}c=this.type,l.needsUpdate=!1,e.setRenderTarget(E,O,b)};function _(v,y){const u=n.update(D);p.defines.VSM_SAMPLES!==v.blurSamples&&(p.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ut(o.x,o.y,{format:an,type:Ht})),p.uniforms.shadow_pass.value=v.map.depthTexture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(y,null,u,p,D,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(y,null,u,m,D,null)}function M(v,y,u,E){let O=null;const b=u.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(b!==void 0)O=b;else if(O=u.isPointLight===!0?x:h,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const V=O.uuid,Z=y.uuid;let q=g[V];q===void 0&&(q={},g[V]=q);let F=q[Z];F===void 0&&(F=O.clone(),q[Z]=F,y.addEventListener("dispose",B)),O=F}if(O.visible=y.visible,O.wireframe=y.wireframe,E===fn?O.side=y.shadowSide!==null?y.shadowSide:y.side:O.side=y.shadowSide!==null?y.shadowSide:C[y.side],O.alphaMap=y.alphaMap,O.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,O.map=y.map,O.clipShadows=y.clipShadows,O.clippingPlanes=y.clippingPlanes,O.clipIntersection=y.clipIntersection,O.displacementMap=y.displacementMap,O.displacementScale=y.displacementScale,O.displacementBias=y.displacementBias,O.wireframeLinewidth=y.wireframeLinewidth,O.linewidth=y.linewidth,u.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const V=e.properties.get(O);V.light=u}return O}function R(v,y,u,E,O){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&O===fn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,v.matrixWorld);const Z=n.update(v),q=v.material;if(Array.isArray(q)){const F=Z.groups;for(let G=0,H=F.length;G<H;G++){const Q=F[G],de=q[Q.materialIndex];if(de&&de.visible){const ve=M(v,de,E,O);v.onBeforeShadow(e,v,y,u,Z,ve,Q),e.renderBufferDirect(u,null,Z,ve,v,Q),v.onAfterShadow(e,v,y,u,Z,ve,Q)}}}else if(q.visible){const F=M(v,q,E,O);v.onBeforeShadow(e,v,y,u,Z,F,null),e.renderBufferDirect(u,null,Z,F,v,null),v.onAfterShadow(e,v,y,u,Z,F,null)}}const V=v.children;for(let Z=0,q=V.length;Z<q;Z++)R(V[Z],y,u,E,O)}function B(v){v.target.removeEventListener("dispose",B);for(const u in g){const E=g[u],O=v.target.uuid;O in E&&(E[O].dispose(),delete E[O])}}}function Dd(e,n){function t(){let S=!1;const ee=new gt;let W=null;const ue=new gt(0,0,0,0);return{setMask:function(ie){W!==ie&&!S&&(e.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){S=ie},setClear:function(ie,K,ge,Pe,ot){ot===!0&&(ie*=Pe,K*=Pe,ge*=Pe),ee.set(ie,K,ge,Pe),ue.equals(ee)===!1&&(e.clearColor(ie,K,ge,Pe),ue.copy(ee))},reset:function(){S=!1,W=null,ue.set(-1,0,0,0)}}}function i(){let S=!1,ee=!1,W=null,ue=null,ie=null;return{setReversed:function(K){if(ee!==K){const ge=n.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Pe=ie;ie=null,this.setClear(Pe)}},getReversed:function(){return ee},setTest:function(K){K?te(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(K){W!==K&&!S&&(e.depthMask(K),W=K)},setFunc:function(K){if(ee&&(K=Uo[K]),ue!==K){switch(K){case mo:e.depthFunc(e.NEVER);break;case ho:e.depthFunc(e.ALWAYS);break;case po:e.depthFunc(e.LESS);break;case Ri:e.depthFunc(e.LEQUAL);break;case uo:e.depthFunc(e.EQUAL);break;case fo:e.depthFunc(e.GEQUAL);break;case lo:e.depthFunc(e.GREATER);break;case co:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=K}},setLocked:function(K){S=K},setClear:function(K){ie!==K&&(ie=K,ee&&(K=1-K),e.clearDepth(K))},reset:function(){S=!1,W=null,ue=null,ie=null,ee=!1}}}function o(){let S=!1,ee=null,W=null,ue=null,ie=null,K=null,ge=null,Pe=null,ot=null;return{setTest:function(We){S||(We?te(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(We){ee!==We&&!S&&(e.stencilMask(We),ee=We)},setFunc:function(We,Dt,Rt){(W!==We||ue!==Dt||ie!==Rt)&&(e.stencilFunc(We,Dt,Rt),W=We,ue=Dt,ie=Rt)},setOp:function(We,Dt,Rt){(K!==We||ge!==Dt||Pe!==Rt)&&(e.stencilOp(We,Dt,Rt),K=We,ge=Dt,Pe=Rt)},setLocked:function(We){S=We},setClear:function(We){ot!==We&&(e.clearStencil(We),ot=We)},reset:function(){S=!1,ee=null,W=null,ue=null,ie=null,K=null,ge=null,Pe=null,ot=null}}}const r=new t,f=new i,h=new o,x=new WeakMap,g=new WeakMap;let I={},C={},p={},m=new WeakMap,P=[],D=null,l=!1,c=null,_=null,M=null,R=null,B=null,v=null,y=null,u=new Xe(0,0,0),E=0,O=!1,b=null,V=null,Z=null,q=null,F=null;const G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const de=e.getParameter(e.VERSION);de.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(de)[1]),H=Q>=1):de.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),H=Q>=2);let ve=null,Re={};const xe=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),Ke=new gt().fromArray(xe),Ie=new gt().fromArray(Ve);function Y(S,ee,W,ue){const ie=new Uint8Array(4),K=e.createTexture();e.bindTexture(S,K),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ge=0;ge<W;ge++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,ie):e.texImage2D(ee+ge,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ie);return K}const le={};le[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),f.setClear(1),h.setClear(0),te(e.DEPTH_TEST),f.setFunc(Ri),lt(!1),tt(na),te(e.CULL_FACE),je(It);function te(S){I[S]!==!0&&(e.enable(S),I[S]=!0)}function Me(S){I[S]!==!1&&(e.disable(S),I[S]=!1)}function Ce(S,ee){return p[S]!==ee?(e.bindFramebuffer(S,ee),p[S]=ee,S===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ee),S===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(S,ee){let W=P,ue=!1;if(S){W=m.get(ee),W===void 0&&(W=[],m.set(ee,W));const ie=S.textures;if(W.length!==ie.length||W[0]!==e.COLOR_ATTACHMENT0){for(let K=0,ge=ie.length;K<ge;K++)W[K]=e.COLOR_ATTACHMENT0+K;W.length=ie.length,ue=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,ue=!0);ue&&e.drawBuffers(W)}function et(S){return D!==S?(e.useProgram(S),D=S,!0):!1}const ye={[on]:e.FUNC_ADD,[Cr]:e.FUNC_SUBTRACT,[br]:e.FUNC_REVERSE_SUBTRACT};ye[Do]=e.MIN,ye[Io]=e.MAX;const ke={[kr]:e.ZERO,[Vr]:e.ONE,[Hr]:e.SRC_COLOR,[Gr]:e.SRC_ALPHA,[Br]:e.SRC_ALPHA_SATURATE,[Or]:e.DST_COLOR,[Fr]:e.DST_ALPHA,[yr]:e.ONE_MINUS_SRC_COLOR,[Nr]:e.ONE_MINUS_SRC_ALPHA,[Ir]:e.ONE_MINUS_DST_COLOR,[Dr]:e.ONE_MINUS_DST_ALPHA,[Ur]:e.CONSTANT_COLOR,[Lr]:e.ONE_MINUS_CONSTANT_COLOR,[wr]:e.CONSTANT_ALPHA,[Pr]:e.ONE_MINUS_CONSTANT_ALPHA};function je(S,ee,W,ue,ie,K,ge,Pe,ot,We){if(S===It){l===!0&&(Me(e.BLEND),l=!1);return}if(l===!1&&(te(e.BLEND),l=!0),S!==vo){if(S!==c||We!==O){if((_!==on||B!==on)&&(e.blendEquation(e.FUNC_ADD),_=on,B=on),We)switch(S){case Cn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ra:e.blendFunc(e.ONE,e.ONE);break;case aa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ia:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Je("WebGLState: Invalid blending: ",S);break}else switch(S){case Cn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case aa:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ia:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",S);break}M=null,R=null,v=null,y=null,u.set(0,0,0),E=0,c=S,O=We}return}ie=ie||ee,K=K||W,ge=ge||ue,(ee!==_||ie!==B)&&(e.blendEquationSeparate(ye[ee],ye[ie]),_=ee,B=ie),(W!==M||ue!==R||K!==v||ge!==y)&&(e.blendFuncSeparate(ke[W],ke[ue],ke[K],ke[ge]),M=W,R=ue,v=K,y=ge),(Pe.equals(u)===!1||ot!==E)&&(e.blendColor(Pe.r,Pe.g,Pe.b,ot),u.copy(Pe),E=ot),c=S,O=!1}function Ne(S,ee){S.side===Tt?Me(e.CULL_FACE):te(e.CULL_FACE);let W=S.side===vt;ee&&(W=!W),lt(W),S.blending===Cn&&S.transparent===!1?je(It):je(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),f.setFunc(S.depthFunc),f.setTest(S.depthTest),f.setMask(S.depthWrite),r.setMask(S.colorWrite);const ue=S.stencilWrite;h.setTest(ue),ue&&(h.setMask(S.stencilWriteMask),h.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),h.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),T(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function lt(S){b!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),b=S)}function tt(S){S!==_o?(te(e.CULL_FACE),S!==V&&(S===na?e.cullFace(e.BACK):S===go?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),V=S}function St(S){S!==Z&&(H&&e.lineWidth(S),Z=S)}function T(S,ee,W){S?(te(e.POLYGON_OFFSET_FILL),(q!==ee||F!==W)&&(q=ee,F=W,f.getReversed()&&(ee=-ee),e.polygonOffset(ee,W))):Me(e.POLYGON_OFFSET_FILL)}function ft(S){S?te(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function Fe(S){S===void 0&&(S=e.TEXTURE0+G-1),ve!==S&&(e.activeTexture(S),ve=S)}function $e(S,ee,W){W===void 0&&(ve===null?W=e.TEXTURE0+G-1:W=ve);let ue=Re[W];ue===void 0&&(ue={type:void 0,texture:void 0},Re[W]=ue),(ue.type!==S||ue.texture!==ee)&&(ve!==W&&(e.activeTexture(W),ve=W),e.bindTexture(S,ee||le[S]),ue.type=S,ue.texture=ee)}function re(){const S=Re[ve];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function at(){try{e.compressedTexImage2D(...arguments)}catch(S){Je("WebGLState:",S)}}function d(){try{e.compressedTexImage3D(...arguments)}catch(S){Je("WebGLState:",S)}}function a(){try{e.texSubImage2D(...arguments)}catch(S){Je("WebGLState:",S)}}function w(){try{e.texSubImage3D(...arguments)}catch(S){Je("WebGLState:",S)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(S){Je("WebGLState:",S)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(S){Je("WebGLState:",S)}}function J(){try{e.texStorage2D(...arguments)}catch(S){Je("WebGLState:",S)}}function ae(){try{e.texStorage3D(...arguments)}catch(S){Je("WebGLState:",S)}}function k(){try{e.texImage2D(...arguments)}catch(S){Je("WebGLState:",S)}}function X(){try{e.texImage3D(...arguments)}catch(S){Je("WebGLState:",S)}}function fe(S){return C[S]!==void 0?C[S]:e.getParameter(S)}function he(S,ee){C[S]!==ee&&(e.pixelStorei(S,ee),C[S]=ee)}function ne(S){Ke.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),Ke.copy(S))}function j(S){Ie.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),Ie.copy(S))}function be(S,ee){let W=g.get(ee);W===void 0&&(W=new WeakMap,g.set(ee,W));let ue=W.get(S);ue===void 0&&(ue=e.getUniformBlockIndex(ee,S.name),W.set(S,ue))}function Le(S,ee){const ue=g.get(ee).get(S);x.get(ee)!==ue&&(e.uniformBlockBinding(ee,ue,S.__bindingPointIndex),x.set(ee,ue))}function Ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),f.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),I={},C={},ve=null,Re={},p={},m=new WeakMap,P=[],D=null,l=!1,c=null,_=null,M=null,R=null,B=null,v=null,y=null,u=new Xe(0,0,0),E=0,O=!1,b=null,V=null,Z=null,q=null,F=null,Ke.set(0,0,e.canvas.width,e.canvas.height),Ie.set(0,0,e.canvas.width,e.canvas.height),r.reset(),f.reset(),h.reset()}return{buffers:{color:r,depth:f,stencil:h},enable:te,disable:Me,bindFramebuffer:Ce,drawBuffers:Te,useProgram:et,setBlending:je,setMaterial:Ne,setFlipSided:lt,setCullFace:tt,setLineWidth:St,setPolygonOffset:T,setScissorTest:ft,activeTexture:Fe,bindTexture:$e,unbindTexture:re,compressedTexImage2D:at,compressedTexImage3D:d,texImage2D:k,texImage3D:X,pixelStorei:he,getParameter:fe,updateUBOMapping:be,uniformBlockBinding:Le,texStorage2D:J,texStorage3D:ae,texSubImage2D:a,texSubImage3D:w,compressedTexSubImage2D:z,compressedTexSubImage3D:$,scissor:ne,viewport:j,reset:Ge}}function Id(e,n,t,i,o,r,f){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new nt,I=new WeakMap,C=new Set;let p;const m=new WeakMap;let P=!1;try{P=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(d,a){return P?new OffscreenCanvas(d,a):bo("canvas")}function l(d,a,w){let z=1;const $=at(d);if(($.width>w||$.height>w)&&(z=w/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const J=Math.floor(z*$.width),ae=Math.floor(z*$.height);p===void 0&&(p=D(J,ae));const k=a?D(J,ae):p;return k.width=J,k.height=ae,k.getContext("2d").drawImage(d,0,0,J,ae),He("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+ae+")."),k}else return"data"in d&&He("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),d;return d}function c(d){return d.generateMipmaps}function _(d){e.generateMipmap(d)}function M(d){return d.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?e.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(d,a,w,z,$,J=!1){if(d!==null){if(e[d]!==void 0)return e[d];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let ae;z&&(ae=n.get("EXT_texture_norm16"),ae||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=a;if(a===e.RED&&(w===e.FLOAT&&(k=e.R32F),w===e.HALF_FLOAT&&(k=e.R16F),w===e.UNSIGNED_BYTE&&(k=e.R8),w===e.UNSIGNED_SHORT&&ae&&(k=ae.R16_EXT),w===e.SHORT&&ae&&(k=ae.R16_SNORM_EXT)),a===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.R8UI),w===e.UNSIGNED_SHORT&&(k=e.R16UI),w===e.UNSIGNED_INT&&(k=e.R32UI),w===e.BYTE&&(k=e.R8I),w===e.SHORT&&(k=e.R16I),w===e.INT&&(k=e.R32I)),a===e.RG&&(w===e.FLOAT&&(k=e.RG32F),w===e.HALF_FLOAT&&(k=e.RG16F),w===e.UNSIGNED_BYTE&&(k=e.RG8),w===e.UNSIGNED_SHORT&&ae&&(k=ae.RG16_EXT),w===e.SHORT&&ae&&(k=ae.RG16_SNORM_EXT)),a===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RG8UI),w===e.UNSIGNED_SHORT&&(k=e.RG16UI),w===e.UNSIGNED_INT&&(k=e.RG32UI),w===e.BYTE&&(k=e.RG8I),w===e.SHORT&&(k=e.RG16I),w===e.INT&&(k=e.RG32I)),a===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGB8UI),w===e.UNSIGNED_SHORT&&(k=e.RGB16UI),w===e.UNSIGNED_INT&&(k=e.RGB32UI),w===e.BYTE&&(k=e.RGB8I),w===e.SHORT&&(k=e.RGB16I),w===e.INT&&(k=e.RGB32I)),a===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),w===e.UNSIGNED_INT&&(k=e.RGBA32UI),w===e.BYTE&&(k=e.RGBA8I),w===e.SHORT&&(k=e.RGBA16I),w===e.INT&&(k=e.RGBA32I)),a===e.RGB&&(w===e.UNSIGNED_SHORT&&ae&&(k=ae.RGB16_EXT),w===e.SHORT&&ae&&(k=ae.RGB16_SNORM_EXT),w===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),w===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),a===e.RGBA){const X=J?ja:it.getTransfer($);w===e.FLOAT&&(k=e.RGBA32F),w===e.HALF_FLOAT&&(k=e.RGBA16F),w===e.UNSIGNED_BYTE&&(k=X===Qe?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT&&ae&&(k=ae.RGBA16_EXT),w===e.SHORT&&ae&&(k=ae.RGBA16_SNORM_EXT),w===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function B(d,a){let w;return d?a===null||a===Kt||a===gn?w=e.DEPTH24_STENCIL8:a===Bt?w=e.DEPTH32F_STENCIL8:a===wn&&(w=e.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Kt||a===gn?w=e.DEPTH_COMPONENT24:a===Bt?w=e.DEPTH_COMPONENT32F:a===wn&&(w=e.DEPTH_COMPONENT16),w}function v(d,a){return c(d)===!0||d.isFramebufferTexture&&d.minFilter!==Xt&&d.minFilter!==dt?Math.log2(Math.max(a.width,a.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?a.mipmaps.length:1}function y(d){const a=d.target;a.removeEventListener("dispose",y),E(a),a.isVideoTexture&&I.delete(a),a.isHTMLTexture&&C.delete(a)}function u(d){const a=d.target;a.removeEventListener("dispose",u),b(a)}function E(d){const a=i.get(d);if(a.__webglInit===void 0)return;const w=d.source,z=m.get(w);if(z){const $=z[a.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(d),Object.keys(z).length===0&&m.delete(w)}i.remove(d)}function O(d){const a=i.get(d);e.deleteTexture(a.__webglTexture);const w=d.source,z=m.get(w);delete z[a.__cacheKey],f.memory.textures--}function b(d){const a=i.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),i.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(a.__webglFramebuffer[z]))for(let $=0;$<a.__webglFramebuffer[z].length;$++)e.deleteFramebuffer(a.__webglFramebuffer[z][$]);else e.deleteFramebuffer(a.__webglFramebuffer[z]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[z])}else{if(Array.isArray(a.__webglFramebuffer))for(let z=0;z<a.__webglFramebuffer.length;z++)e.deleteFramebuffer(a.__webglFramebuffer[z]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let z=0;z<a.__webglColorRenderbuffer.length;z++)a.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[z]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const w=d.textures;for(let z=0,$=w.length;z<$;z++){const J=i.get(w[z]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),f.memory.textures--),i.remove(w[z])}i.remove(d)}let V=0;function Z(){V=0}function q(){return V}function F(d){V=d}function G(){const d=V;return d>=o.maxTextures&&He("WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+o.maxTextures),V+=1,d}function H(d){const a=[];return a.push(d.wrapS),a.push(d.wrapT),a.push(d.wrapR||0),a.push(d.magFilter),a.push(d.minFilter),a.push(d.anisotropy),a.push(d.internalFormat),a.push(d.format),a.push(d.type),a.push(d.generateMipmaps),a.push(d.premultiplyAlpha),a.push(d.flipY),a.push(d.unpackAlignment),a.push(d.colorSpace),a.join()}function Q(d,a){const w=i.get(d);if(d.isVideoTexture&&$e(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&w.__version!==d.version){const z=d.image;if(z===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(w,d,a);return}}else d.isExternalTexture&&(w.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+a)}function de(d,a){const w=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&w.__version!==d.version){Me(w,d,a);return}else d.isExternalTexture&&(w.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+a)}function ve(d,a){const w=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&w.__version!==d.version){Me(w,d,a);return}t.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+a)}function Re(d,a){const w=i.get(d);if(d.isCubeDepthTexture!==!0&&d.version>0&&w.__version!==d.version){Ce(w,d,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+a)}const xe={[kt]:e.REPEAT,[vn]:e.CLAMP_TO_EDGE,[Wr]:e.MIRRORED_REPEAT},Ve={[Xt]:e.NEAREST,[zr]:e.NEAREST_MIPMAP_NEAREST,[xn]:e.NEAREST_MIPMAP_LINEAR,[dt]:e.LINEAR,[Fn]:e.LINEAR_MIPMAP_NEAREST,[Ot]:e.LINEAR_MIPMAP_LINEAR},Ke={[Zr]:e.NEVER,[$r]:e.ALWAYS,[Kr]:e.LESS,[ui]:e.LEQUAL,[qr]:e.EQUAL,[di]:e.GEQUAL,[Yr]:e.GREATER,[Xr]:e.NOTEQUAL};function Ie(d,a){if(a.type===Bt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===dt||a.magFilter===Fn||a.magFilter===xn||a.magFilter===Ot||a.minFilter===dt||a.minFilter===Fn||a.minFilter===xn||a.minFilter===Ot)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(d,e.TEXTURE_WRAP_S,xe[a.wrapS]),e.texParameteri(d,e.TEXTURE_WRAP_T,xe[a.wrapT]),(d===e.TEXTURE_3D||d===e.TEXTURE_2D_ARRAY)&&e.texParameteri(d,e.TEXTURE_WRAP_R,xe[a.wrapR]),e.texParameteri(d,e.TEXTURE_MAG_FILTER,Ve[a.magFilter]),e.texParameteri(d,e.TEXTURE_MIN_FILTER,Ve[a.minFilter]),a.compareFunction&&(e.texParameteri(d,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(d,e.TEXTURE_COMPARE_FUNC,Ke[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Xt||a.minFilter!==xn&&a.minFilter!==Ot||a.type===Bt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");e.texParameterf(d,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,o.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Y(d,a){let w=!1;d.__webglInit===void 0&&(d.__webglInit=!0,a.addEventListener("dispose",y));const z=a.source;let $=m.get(z);$===void 0&&($={},m.set(z,$));const J=H(a);if(J!==d.__cacheKey){$[J]===void 0&&($[J]={texture:e.createTexture(),usedTimes:0},f.memory.textures++,w=!0),$[J].usedTimes++;const ae=$[d.__cacheKey];ae!==void 0&&($[d.__cacheKey].usedTimes--,ae.usedTimes===0&&O(a)),d.__cacheKey=J,d.__webglTexture=$[J].texture}return w}function le(d,a,w){return Math.floor(Math.floor(d/w)/a)}function te(d,a,w,z){const J=d.updateRanges;if(J.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,w,z,a.data);else{J.sort((he,ne)=>he.start-ne.start);let ae=0;for(let he=1;he<J.length;he++){const ne=J[ae],j=J[he],be=ne.start+ne.count,Le=le(j.start,a.width,4),Ge=le(ne.start,a.width,4);j.start<=be+1&&Le===Ge&&le(j.start+j.count-1,a.width,4)===Le?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++ae,J[ae]=j)}J.length=ae+1;const k=t.getParameter(e.UNPACK_ROW_LENGTH),X=t.getParameter(e.UNPACK_SKIP_PIXELS),fe=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let he=0,ne=J.length;he<ne;he++){const j=J[he],be=Math.floor(j.start/4),Le=Math.ceil(j.count/4),Ge=be%a.width,S=Math.floor(be/a.width),ee=Le,W=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(e.UNPACK_SKIP_ROWS,S),t.texSubImage2D(e.TEXTURE_2D,0,Ge,S,ee,W,w,z,a.data)}d.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,k),t.pixelStorei(e.UNPACK_SKIP_PIXELS,X),t.pixelStorei(e.UNPACK_SKIP_ROWS,fe)}}function Me(d,a,w){let z=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(z=e.TEXTURE_3D);const $=Y(d,a),J=a.source;t.bindTexture(z,d.__webglTexture,e.TEXTURE0+w);const ae=i.get(J);if(J.version!==ae.__version||$===!0){if(t.activeTexture(e.TEXTURE0+w),(typeof ImageBitmap<"u"&&a.image instanceof ImageBitmap)===!1){const W=it.getPrimaries(it.workingColorSpace),ue=a.colorSpace===Jt?null:it.getPrimaries(a.colorSpace),ie=a.colorSpace===Jt||W===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let X=l(a.image,!1,o.maxTextureSize);X=re(a,X);const fe=r.convert(a.format,a.colorSpace),he=r.convert(a.type);let ne=R(a.internalFormat,fe,he,a.normalized,a.colorSpace,a.isVideoTexture);Ie(z,a);let j;const be=a.mipmaps,Le=a.isVideoTexture!==!0,Ge=ae.__version===void 0||$===!0,S=J.dataReady,ee=v(a,X);if(a.isDepthTexture)ne=B(a.format===jt,a.type),Ge&&(Le?t.texStorage2D(e.TEXTURE_2D,1,ne,X.width,X.height):t.texImage2D(e.TEXTURE_2D,0,ne,X.width,X.height,0,fe,he,null));else if(a.isDataTexture)if(be.length>0){Le&&Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,be[0].width,be[0].height);for(let W=0,ue=be.length;W<ue;W++)j=be[W],Le?S&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,j.width,j.height,fe,he,j.data):t.texImage2D(e.TEXTURE_2D,W,ne,j.width,j.height,0,fe,he,j.data);a.generateMipmaps=!1}else Le?(Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,X.width,X.height),S&&te(a,X,fe,he)):t.texImage2D(e.TEXTURE_2D,0,ne,X.width,X.height,0,fe,he,X.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){Le&&Ge&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ne,be[0].width,be[0].height,X.depth);for(let W=0,ue=be.length;W<ue;W++)if(j=be[W],a.format!==xt)if(fe!==null)if(Le){if(S)if(a.layerUpdates.size>0){const ie=sa(j.width,j.height,a.format,a.type);for(const K of a.layerUpdates){const ge=j.data.subarray(K*ie/j.data.BYTES_PER_ELEMENT,(K+1)*ie/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,K,j.width,j.height,1,fe,ge)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,X.depth,fe,j.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,ne,j.width,j.height,X.depth,0,j.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?S&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,X.depth,fe,he,j.data):t.texImage3D(e.TEXTURE_2D_ARRAY,W,ne,j.width,j.height,X.depth,0,fe,he,j.data)}else{Le&&Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,be[0].width,be[0].height);for(let W=0,ue=be.length;W<ue;W++)j=be[W],a.format!==xt?fe!==null?Le?S&&t.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,j.width,j.height,fe,j.data):t.compressedTexImage2D(e.TEXTURE_2D,W,ne,j.width,j.height,0,j.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?S&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,j.width,j.height,fe,he,j.data):t.texImage2D(e.TEXTURE_2D,W,ne,j.width,j.height,0,fe,he,j.data)}else if(a.isDataArrayTexture)if(Le){if(Ge&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ne,X.width,X.height,X.depth),S)if(a.layerUpdates.size>0){const W=sa(X.width,X.height,a.format,a.type);for(const ue of a.layerUpdates){const ie=X.data.subarray(ue*W/X.data.BYTES_PER_ELEMENT,(ue+1)*W/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ue,X.width,X.height,1,fe,he,ie)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,fe,he,X.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ne,X.width,X.height,X.depth,0,fe,he,X.data);else if(a.isData3DTexture)Le?(Ge&&t.texStorage3D(e.TEXTURE_3D,ee,ne,X.width,X.height,X.depth),S&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,fe,he,X.data)):t.texImage3D(e.TEXTURE_3D,0,ne,X.width,X.height,X.depth,0,fe,he,X.data);else if(a.isFramebufferTexture){if(Ge)if(Le)t.texStorage2D(e.TEXTURE_2D,ee,ne,X.width,X.height);else{let W=X.width,ue=X.height;for(let ie=0;ie<ee;ie++)t.texImage2D(e.TEXTURE_2D,ie,ne,W,ue,0,fe,he,null),W>>=1,ue>>=1}}else if(a.isHTMLTexture){if("texElementImage2D"in e){const W=e.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),X.parentNode!==W){W.appendChild(X),C.add(a),W.onpaint=Pe=>{const ot=Pe.changedElements;for(const We of C)ot.includes(We.image)&&(We.needsUpdate=!0)},W.requestPaint();return}const ue=0,ie=e.RGBA,K=e.RGBA,ge=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,ue,ie,K,ge,X),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(be.length>0){if(Le&&Ge){const W=at(be[0]);t.texStorage2D(e.TEXTURE_2D,ee,ne,W.width,W.height)}for(let W=0,ue=be.length;W<ue;W++)j=be[W],Le?S&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,fe,he,j):t.texImage2D(e.TEXTURE_2D,W,ne,fe,he,j);a.generateMipmaps=!1}else if(Le){if(Ge){const W=at(X);t.texStorage2D(e.TEXTURE_2D,ee,ne,W.width,W.height)}S&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,fe,he,X)}else t.texImage2D(e.TEXTURE_2D,0,ne,fe,he,X);c(a)&&_(z),ae.__version=J.version,a.onUpdate&&a.onUpdate(a)}d.__version=a.version}function Ce(d,a,w){if(a.image.length!==6)return;const z=Y(d,a),$=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,d.__webglTexture,e.TEXTURE0+w);const J=i.get($);if($.version!==J.__version||z===!0){t.activeTexture(e.TEXTURE0+w);const ae=it.getPrimaries(it.workingColorSpace),k=a.colorSpace===Jt?null:it.getPrimaries(a.colorSpace),X=a.colorSpace===Jt||ae===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const fe=a.isCompressedTexture||a.image[0].isCompressedTexture,he=a.image[0]&&a.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!fe&&!he?ne[K]=l(a.image[K],!0,o.maxCubemapSize):ne[K]=he?a.image[K].image:a.image[K],ne[K]=re(a,ne[K]);const j=ne[0],be=r.convert(a.format,a.colorSpace),Le=r.convert(a.type),Ge=R(a.internalFormat,be,Le,a.normalized,a.colorSpace),S=a.isVideoTexture!==!0,ee=J.__version===void 0||z===!0,W=$.dataReady;let ue=v(a,j);Ie(e.TEXTURE_CUBE_MAP,a);let ie;if(fe){S&&ee&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ge,j.width,j.height);for(let K=0;K<6;K++){ie=ne[K].mipmaps;for(let ge=0;ge<ie.length;ge++){const Pe=ie[ge];a.format!==xt?be!==null?S?W&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Pe.width,Pe.height,be,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ge,Pe.width,Pe.height,0,Pe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?W&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Pe.width,Pe.height,be,Le,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ge,Pe.width,Pe.height,0,be,Le,Pe.data)}}}else{if(ie=a.mipmaps,S&&ee){ie.length>0&&ue++;const K=at(ne[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(he){S?W&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,be,Le,ne[K].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ne[K].width,ne[K].height,0,be,Le,ne[K].data);for(let ge=0;ge<ie.length;ge++){const ot=ie[ge].image[K].image;S?W&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,ot.width,ot.height,be,Le,ot.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ge,ot.width,ot.height,0,be,Le,ot.data)}}else{S?W&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,Le,ne[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,be,Le,ne[K]);for(let ge=0;ge<ie.length;ge++){const Pe=ie[ge];S?W&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,be,Le,Pe.image[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ge,be,Le,Pe.image[K])}}}c(a)&&_(e.TEXTURE_CUBE_MAP),J.__version=$.version,a.onUpdate&&a.onUpdate(a)}d.__version=a.version}function Te(d,a,w,z,$,J){const ae=r.convert(w.format,w.colorSpace),k=r.convert(w.type),X=R(w.internalFormat,ae,k,w.normalized,w.colorSpace),fe=i.get(a),he=i.get(w);if(he.__renderTarget=a,!fe.__hasExternalTextures){const ne=Math.max(1,a.width>>J),j=Math.max(1,a.height>>J);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?t.texImage3D($,J,X,ne,j,a.depth,0,ae,k,null):t.texImage2D($,J,X,ne,j,0,ae,k,null)}t.bindFramebuffer(e.FRAMEBUFFER,d),Fe(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,$,he.__webglTexture,0,ft(a)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,$,he.__webglTexture,J),t.bindFramebuffer(e.FRAMEBUFFER,null)}function et(d,a,w){if(e.bindRenderbuffer(e.RENDERBUFFER,d),a.depthBuffer){const z=a.depthTexture,$=z&&z.isDepthTexture?z.type:null,J=B(a.stencilBuffer,$),ae=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(a)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft(a),J,a.width,a.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,ft(a),J,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,J,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,d)}else{const z=a.textures;for(let $=0;$<z.length;$++){const J=z[$],ae=r.convert(J.format,J.colorSpace),k=r.convert(J.type),X=R(J.internalFormat,ae,k,J.normalized,J.colorSpace);Fe(a)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft(a),X,a.width,a.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,ft(a),X,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,X,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(d,a,w){const z=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,d),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(a.depthTexture);if($.__renderTarget=a,(!$.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),z){if($.__webglInit===void 0&&($.__webglInit=!0,a.depthTexture.addEventListener("dispose",y)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,a.depthTexture);const fe=r.convert(a.depthTexture.format),he=r.convert(a.depthTexture.type);let ne;a.depthTexture.format===nn?ne=e.DEPTH_COMPONENT24:a.depthTexture.format===jt&&(ne=e.DEPTH24_STENCIL8);for(let j=0;j<6;j++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ne,a.width,a.height,0,fe,he,null)}}else Q(a.depthTexture,0);const J=$.__webglTexture,ae=ft(a),k=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+w:e.TEXTURE_2D,X=a.depthTexture.format===jt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===nn)Fe(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,k,J,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,X,k,J,0);else if(a.depthTexture.format===jt)Fe(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,k,J,0,ae):e.framebufferTexture2D(e.FRAMEBUFFER,X,k,J,0);else throw new Error("Unknown depthTexture format")}function ke(d){const a=i.get(d),w=d.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==d.depthTexture){const z=d.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),z){const $=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),a.__depthDisposeCallback=$}a.__boundDepthTexture=z}if(d.depthTexture&&!a.__autoAllocateDepthBuffer)if(w)for(let z=0;z<6;z++)ye(a.__webglFramebuffer[z],d,z);else{const z=d.texture.mipmaps;z&&z.length>0?ye(a.__webglFramebuffer[0],d,0):ye(a.__webglFramebuffer,d,0)}else if(w){a.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[z]),a.__webglDepthbuffer[z]===void 0)a.__webglDepthbuffer[z]=e.createRenderbuffer(),et(a.__webglDepthbuffer[z],d,!1);else{const $=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=a.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,J)}}else{const z=d.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),et(a.__webglDepthbuffer,d,!1);else{const $=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,J)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function je(d,a,w){const z=i.get(d);a!==void 0&&Te(z.__webglFramebuffer,d,d.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&ke(d)}function Ne(d){const a=d.texture,w=i.get(d),z=i.get(a);d.addEventListener("dispose",u);const $=d.textures,J=d.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=a.version,f.memory.textures++),J){w.__webglFramebuffer=[];for(let k=0;k<6;k++)if(a.mipmaps&&a.mipmaps.length>0){w.__webglFramebuffer[k]=[];for(let X=0;X<a.mipmaps.length;X++)w.__webglFramebuffer[k][X]=e.createFramebuffer()}else w.__webglFramebuffer[k]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){w.__webglFramebuffer=[];for(let k=0;k<a.mipmaps.length;k++)w.__webglFramebuffer[k]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(ae)for(let k=0,X=$.length;k<X;k++){const fe=i.get($[k]);fe.__webglTexture===void 0&&(fe.__webglTexture=e.createTexture(),f.memory.textures++)}if(d.samples>0&&Fe(d)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let k=0;k<$.length;k++){const X=$[k];w.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[k]);const fe=r.convert(X.format,X.colorSpace),he=r.convert(X.type),ne=R(X.internalFormat,fe,he,X.normalized,X.colorSpace,d.isXRRenderTarget===!0),j=ft(d);e.renderbufferStorageMultisample(e.RENDERBUFFER,j,ne,d.width,d.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,w.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),d.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),et(w.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,a);for(let k=0;k<6;k++)if(a.mipmaps&&a.mipmaps.length>0)for(let X=0;X<a.mipmaps.length;X++)Te(w.__webglFramebuffer[k][X],d,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,X);else Te(w.__webglFramebuffer[k],d,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);c(a)&&_(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let k=0,X=$.length;k<X;k++){const fe=$[k],he=i.get(fe);let ne=e.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(ne=d.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ne,he.__webglTexture),Ie(ne,fe),Te(w.__webglFramebuffer,d,fe,e.COLOR_ATTACHMENT0+k,ne,0),c(fe)&&_(ne)}t.unbindTexture()}else{let k=e.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(k=d.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(k,z.__webglTexture),Ie(k,a),a.mipmaps&&a.mipmaps.length>0)for(let X=0;X<a.mipmaps.length;X++)Te(w.__webglFramebuffer[X],d,a,e.COLOR_ATTACHMENT0,k,X);else Te(w.__webglFramebuffer,d,a,e.COLOR_ATTACHMENT0,k,0);c(a)&&_(k),t.unbindTexture()}d.depthBuffer&&ke(d)}function lt(d){const a=d.textures;for(let w=0,z=a.length;w<z;w++){const $=a[w];if(c($)){const J=M(d),ae=i.get($).__webglTexture;t.bindTexture(J,ae),_(J),t.unbindTexture()}}}const tt=[],St=[];function T(d){if(d.samples>0){if(Fe(d)===!1){const a=d.textures,w=d.width,z=d.height;let $=e.COLOR_BUFFER_BIT;const J=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=i.get(d),k=a.length>1;if(k)for(let fe=0;fe<a.length;fe++)t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const X=d.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<a.length;fe++){if(d.resolveDepthBuffer&&(d.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const he=i.get(a[fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,he,0)}e.blitFramebuffer(0,0,w,z,0,0,w,z,$,e.NEAREST),x===!0&&(tt.length=0,St.length=0,tt.push(e.COLOR_ATTACHMENT0+fe),d.depthBuffer&&d.resolveDepthBuffer===!1&&(tt.push(J),St.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,St)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let fe=0;fe<a.length;fe++){t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const he=i.get(a[fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,he,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&x){const a=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function ft(d){return Math.min(o.maxSamples,d.samples)}function Fe(d){const a=i.get(d);return d.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function $e(d){const a=f.render.frame;I.get(d)!==a&&(I.set(d,a),d.update())}function re(d,a){const w=d.colorSpace,z=d.format,$=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||w!==Fa&&w!==Jt&&(it.getTransfer(w)===Qe?(z!==xt||$!==wt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",w)),a}function at(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(g.width=d.naturalWidth||d.width,g.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(g.width=d.displayWidth,g.height=d.displayHeight):(g.width=d.width,g.height=d.height),g}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.getTextureUnits=q,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=de,this.setTexture3D=ve,this.setTextureCube=Re,this.rebindTextures=je,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Nd(e,n){function t(i,o=Jt){let r;const f=it.getTransfer(o);if(i===wt)return e.UNSIGNED_BYTE;if(i===Ha)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Va)return e.UNSIGNED_SHORT_5_5_5_1;if(i===to)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===no)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===io)return e.BYTE;if(i===ao)return e.SHORT;if(i===wn)return e.UNSIGNED_SHORT;if(i===Wa)return e.INT;if(i===Kt)return e.UNSIGNED_INT;if(i===Bt)return e.FLOAT;if(i===Ht)return e.HALF_FLOAT;if(i===ro)return e.ALPHA;if(i===oo)return e.RGB;if(i===xt)return e.RGBA;if(i===nn)return e.DEPTH_COMPONENT;if(i===jt)return e.DEPTH_STENCIL;if(i===so)return e.RED;if(i===Ga)return e.RED_INTEGER;if(i===an)return e.RG;if(i===Ba)return e.RG_INTEGER;if(i===Oa)return e.RGBA_INTEGER;if(i===On||i===Bn||i===Gn||i===Hn)if(f===Qe)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===On)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===On)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bi||i===Ci||i===Pi||i===wi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ci)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Li||i===Ui||i===Di||i===Ii||i===Ni||i===ii||i===yi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Li||i===Ui)return f===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Di)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ii)return r.COMPRESSED_R11_EAC;if(i===Ni)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ii)return r.COMPRESSED_RG11_EAC;if(i===yi)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fi||i===Oi||i===Bi||i===Gi||i===Hi||i===Vi||i===ki||i===Wi||i===zi||i===Xi||i===Yi||i===qi||i===Ki||i===$i)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ki)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qi)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ki)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$i)return f===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zi||i===Qi||i===Ji)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Zi)return f===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ji)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ji||i===ea||i===ai||i===ta)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===ji)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ai)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const yd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Od{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new ka(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new At({vertexShader:yd,fragmentShader:Fd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bd extends Mr{constructor(n,t){super();const i=this;let o=null,r=1,f=null,h="local-floor",x=1,g=null,I=null,C=null,p=null,m=null,P=null;const D=typeof XRWebGLBinding<"u",l=new Od,c={},_=t.getContextAttributes();let M=null,R=null;const B=[],v=[],y=new nt;let u=null;const E=new un;E.viewport=new gt;const O=new un;O.viewport=new gt;const b=[E,O],V=new Tr;let Z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=B[Y];return le===void 0&&(le=new yn,B[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=B[Y];return le===void 0&&(le=new yn,B[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=B[Y];return le===void 0&&(le=new yn,B[Y]=le),le.getHandSpace()};function F(Y){const le=v.indexOf(Y.inputSource);if(le===-1)return;const te=B[le];te!==void 0&&(te.update(Y.inputSource,Y.frame,g||f),te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",H);for(let Y=0;Y<B.length;Y++){const le=v[Y];le!==null&&(v[Y]=null,B[Y].disconnect(le))}Z=null,q=null,l.reset();for(const Y in c)delete c[Y];n.setRenderTarget(M),m=null,p=null,C=null,o=null,R=null,Ie.stop(),i.isPresenting=!1,n.setPixelRatio(u),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||f},this.setReferenceSpace=function(Y){g=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return C===null&&D&&(C=new XRWebGLBinding(o,t)),C},this.getFrame=function(){return P},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(M=n.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",G),o.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),u=n.getPixelRatio(),n.getSize(y),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Me=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?jt:nn,Me=_.stencil?gn:Kt);const Te={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};C=this.getBinding(),p=C.createProjectionLayer(Te),o.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),R=new Ut(p.textureWidth,p.textureHeight,{format:xt,type:wt,depthTexture:new _n(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:n.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,te),o.updateRenderState({baseLayer:m}),n.setPixelRatio(1),n.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Ut(m.framebufferWidth,m.framebufferHeight,{format:xt,type:wt,colorSpace:n.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(x),g=null,f=await o.requestReferenceSpace(h),Ie.setContext(o),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function H(Y){for(let le=0;le<Y.removed.length;le++){const te=Y.removed[le],Me=v.indexOf(te);Me>=0&&(v[Me]=null,B[Me].disconnect(te))}for(let le=0;le<Y.added.length;le++){const te=Y.added[le];let Me=v.indexOf(te);if(Me===-1){for(let Te=0;Te<B.length;Te++)if(Te>=v.length){v.push(te),Me=Te;break}else if(v[Te]===null){v[Te]=te,Me=Te;break}if(Me===-1)break}const Ce=B[Me];Ce&&Ce.connect(te)}}const Q=new Ae,de=new Ae;function ve(Y,le,te){Q.setFromMatrixPosition(le.matrixWorld),de.setFromMatrixPosition(te.matrixWorld);const Me=Q.distanceTo(de),Ce=le.projectionMatrix.elements,Te=te.projectionMatrix.elements,et=Ce[14]/(Ce[10]-1),ye=Ce[14]/(Ce[10]+1),ke=(Ce[9]+1)/Ce[5],je=(Ce[9]-1)/Ce[5],Ne=(Ce[8]-1)/Ce[0],lt=(Te[8]+1)/Te[0],tt=et*Ne,St=et*lt,T=Me/(-Ne+lt),ft=T*-Ne;if(le.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(T),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Fe=et+T,$e=ye+T,re=tt-ft,at=St+(Me-ft),d=ke*ye/$e*Fe,a=je*ye/$e*Fe;Y.projectionMatrix.makePerspective(re,at,d,a,Fe,$e),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Re(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let le=Y.near,te=Y.far;l.texture!==null&&(l.depthNear>0&&(le=l.depthNear),l.depthFar>0&&(te=l.depthFar)),V.near=O.near=E.near=le,V.far=O.far=E.far=te,(Z!==V.near||q!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),Z=V.near,q=V.far),V.layers.mask=Y.layers.mask|6,E.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;const Me=Y.parent,Ce=V.cameras;Re(V,Me);for(let Te=0;Te<Ce.length;Te++)Re(Ce[Te],Me);Ce.length===2?ve(V,E,O):V.projectionMatrix.copy(E.projectionMatrix),xe(Y,V,Me)};function xe(Y,le,te){te===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ar*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&m===null))return x},this.setFoveation=function(Y){x=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(V)},this.getCameraTexture=function(Y){return c[Y]};let Ve=null;function Ke(Y,le){if(I=le.getViewerPose(g||f),P=le,I!==null){const te=I.views;m!==null&&(n.setRenderTargetFramebuffer(R,m.framebuffer),n.setRenderTarget(R));let Me=!1;te.length!==V.cameras.length&&(V.cameras.length=0,Me=!0);for(let ye=0;ye<te.length;ye++){const ke=te[ye];let je=null;if(m!==null)je=m.getViewport(ke);else{const lt=C.getViewSubImage(p,ke);je=lt.viewport,ye===0&&(n.setRenderTargetTextures(R,lt.colorTexture,lt.depthStencilTexture),n.setRenderTarget(R))}let Ne=b[ye];Ne===void 0&&(Ne=new un,Ne.layers.enable(ye),Ne.viewport=new gt,b[ye]=Ne),Ne.matrix.fromArray(ke.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ke.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(je.x,je.y,je.width,je.height),ye===0&&(V.matrix.copy(Ne.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Me===!0&&V.cameras.push(Ne)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){C=i.getBinding();const ye=C.getDepthInformation(te[0]);ye&&ye.isValid&&ye.texture&&l.init(ye,o.renderState)}if(Ce&&Ce.includes("camera-access")&&D){n.state.unbindTexture(),C=i.getBinding();for(let ye=0;ye<te.length;ye++){const ke=te[ye].camera;if(ke){let je=c[ke];je||(je=new ka,c[ke]=je);const Ne=C.getCameraImage(ke);je.sourceTexture=Ne}}}}for(let te=0;te<B.length;te++){const Me=v[te],Ce=B[te];Me!==null&&Ce!==void 0&&Ce.update(Me,le,g||f)}Ve&&Ve(Y,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),P=null}const Ie=new tr;Ie.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){Ve=Y},this.dispose=function(){}}}const Gd=new en,cr=new Oe;cr.set(-1,0,0,0,1,0,0,0,1);function Hd(e,n){function t(l,c){l.matrixAutoUpdate===!0&&l.updateMatrix(),c.value.copy(l.matrix)}function i(l,c){c.color.getRGB(l.fogColor.value,Xa(e)),c.isFog?(l.fogNear.value=c.near,l.fogFar.value=c.far):c.isFogExp2&&(l.fogDensity.value=c.density)}function o(l,c,_,M,R){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(l,c):c.isMeshLambertMaterial?(r(l,c),c.envMap&&(l.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(l,c),C(l,c)):c.isMeshPhongMaterial?(r(l,c),I(l,c),c.envMap&&(l.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(l,c),p(l,c),c.isMeshPhysicalMaterial&&m(l,c,R)):c.isMeshMatcapMaterial?(r(l,c),P(l,c)):c.isMeshDepthMaterial?r(l,c):c.isMeshDistanceMaterial?(r(l,c),D(l,c)):c.isMeshNormalMaterial?r(l,c):c.isLineBasicMaterial?(f(l,c),c.isLineDashedMaterial&&h(l,c)):c.isPointsMaterial?x(l,c,_,M):c.isSpriteMaterial?g(l,c):c.isShadowMaterial?(l.color.value.copy(c.color),l.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(l,c){l.opacity.value=c.opacity,c.color&&l.diffuse.value.copy(c.color),c.emissive&&l.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(l.map.value=c.map,t(c.map,l.mapTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.bumpMap&&(l.bumpMap.value=c.bumpMap,t(c.bumpMap,l.bumpMapTransform),l.bumpScale.value=c.bumpScale,c.side===vt&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,t(c.normalMap,l.normalMapTransform),l.normalScale.value.copy(c.normalScale),c.side===vt&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,t(c.displacementMap,l.displacementMapTransform),l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,l.emissiveMapTransform)),c.specularMap&&(l.specularMap.value=c.specularMap,t(c.specularMap,l.specularMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);const _=n.get(c),M=_.envMap,R=_.envMapRotation;M&&(l.envMap.value=M,l.envMapRotation.value.setFromMatrix4(Gd.makeRotationFromEuler(R)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(cr),l.reflectivity.value=c.reflectivity,l.ior.value=c.ior,l.refractionRatio.value=c.refractionRatio),c.lightMap&&(l.lightMap.value=c.lightMap,l.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,l.lightMapTransform)),c.aoMap&&(l.aoMap.value=c.aoMap,l.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,l.aoMapTransform))}function f(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,c.map&&(l.map.value=c.map,t(c.map,l.mapTransform))}function h(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}function x(l,c,_,M){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*_,l.scale.value=M*.5,c.map&&(l.map.value=c.map,t(c.map,l.uvTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}function g(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map,t(c.map,l.mapTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,t(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}function I(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4)}function C(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap)}function p(l,c){l.metalness.value=c.metalness,c.metalnessMap&&(l.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,l.metalnessMapTransform)),l.roughness.value=c.roughness,c.roughnessMap&&(l.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,l.roughnessMapTransform)),c.envMap&&(l.envMapIntensity.value=c.envMapIntensity)}function m(l,c,_){l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,l.sheenColorMapTransform)),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,l.sheenRoughnessMapTransform))),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,l.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(l.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===vt&&l.clearcoatNormalScale.value.negate())),c.dispersion>0&&(l.dispersion.value=c.dispersion),c.iridescence>0&&(l.iridescence.value=c.iridescence,l.iridescenceIOR.value=c.iridescenceIOR,l.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(l.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,l.iridescenceMapTransform)),c.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=_.texture,l.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,l.transmissionMapTransform)),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(l.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(l.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,l.specularColorMapTransform)),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,l.specularIntensityMapTransform))}function P(l,c){c.matcap&&(l.matcap.value=c.matcap)}function D(l,c){const _=n.get(c).light;l.referencePosition.value.setFromMatrixPosition(_.matrixWorld),l.nearDistance.value=_.shadow.camera.near,l.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Vd(e,n,t,i){let o={},r={},f=[];const h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function x(_,M){const R=M.program;i.uniformBlockBinding(_,R)}function g(_,M){let R=o[_.id];R===void 0&&(P(_),R=I(_),o[_.id]=R,_.addEventListener("dispose",l));const B=M.program;i.updateUBOMapping(_,B);const v=n.render.frame;r[_.id]!==v&&(p(_),r[_.id]=v)}function I(_){const M=C();_.__bindingPointIndex=M;const R=e.createBuffer(),B=_.__size,v=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,B,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,R),R}function C(){for(let _=0;_<h;_++)if(f.indexOf(_)===-1)return f.push(_),_;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const M=o[_.id],R=_.uniforms,B=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let v=0,y=R.length;v<y;v++){const u=Array.isArray(R[v])?R[v]:[R[v]];for(let E=0,O=u.length;E<O;E++){const b=u[E];if(m(b,v,E,B)===!0){const V=b.__offset,Z=Array.isArray(b.value)?b.value:[b.value];let q=0;for(let F=0;F<Z.length;F++){const G=Z[F],H=D(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,V+q,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):ArrayBuffer.isView(G)?b.__data.set(new G.constructor(G.buffer,G.byteOffset,b.__data.length)):(G.toArray(b.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(_,M,R,B){const v=_.value,y=M+"_"+R;if(B[y]===void 0)return typeof v=="number"||typeof v=="boolean"?B[y]=v:ArrayBuffer.isView(v)?B[y]=v.slice():B[y]=v.clone(),!0;{const u=B[y];if(typeof v=="number"||typeof v=="boolean"){if(u!==v)return B[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(u.equals(v)===!1)return u.copy(v),!0}}return!1}function P(_){const M=_.uniforms;let R=0;const B=16;for(let y=0,u=M.length;y<u;y++){const E=Array.isArray(M[y])?M[y]:[M[y]];for(let O=0,b=E.length;O<b;O++){const V=E[O],Z=Array.isArray(V.value)?V.value:[V.value];for(let q=0,F=Z.length;q<F;q++){const G=Z[q],H=D(G),Q=R%B,de=Q%H.boundary,ve=Q+de;R+=de,ve!==0&&B-ve<H.storage&&(R+=B-ve),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=H.storage}}}const v=R%B;return v>0&&(R+=B-v),_.__size=R,_.__cache={},this}function D(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),M}function l(_){const M=_.target;M.removeEventListener("dispose",l);const R=f.indexOf(M.__bindingPointIndex);f.splice(R,1),e.deleteBuffer(o[M.id]),delete o[M.id],delete r[M.id]}function c(){for(const _ in o)e.deleteBuffer(o[_]);f=[],o={},r={}}return{bind:x,update:g,dispose:c}}const kd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ct=null;function Wd(){return Ct===null&&(Ct=new ln(kd,16,16,an,Ht),Ct.name="DFG_LUT",Ct.minFilter=dt,Ct.magFilter=dt,Ct.wrapS=vn,Ct.wrapT=vn,Ct.generateMipmaps=!1,Ct.needsUpdate=!0),Ct}class zd{constructor(n={}){const{canvas:t=gr(),context:i=null,depth:o=!0,stencil:r=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:g=!1,powerPreference:I="default",failIfMajorPerformanceCaveat:C=!1,reversedDepthBuffer:p=!1,outputBufferType:m=wt}=n;this.isWebGLRenderer=!0;let P;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");P=i.getContextAttributes().alpha}else P=f;const D=m,l=new Set([Oa,Ba,Ga]),c=new Set([wt,Kt,wn,gn,Ha,Va]),_=new Uint32Array(4),M=new Int32Array(4),R=new Ae;let B=null,v=null;const y=[],u=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let b=!1,V=null;this._outputColorSpace=vr;let Z=0,q=0,F=null,G=-1,H=null;const Q=new gt,de=new gt;let ve=null;const Re=new Xe(0);let xe=0,Ve=t.width,Ke=t.height,Ie=1,Y=null,le=null;const te=new gt(0,0,Ve,Ke),Me=new gt(0,0,Ve,Ke);let Ce=!1;const Te=new Na;let et=!1,ye=!1;const ke=new en,je=new Ae,Ne=new gt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function St(){return F===null?Ie:1}let T=i;function ft(s,A){return t.getContext(s,A)}try{const s={alpha:!0,depth:o,stencil:r,antialias:h,premultipliedAlpha:x,preserveDrawingBuffer:g,powerPreference:I,failIfMajorPerformanceCaveat:C};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sr}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),T===null){const A="webgl2";if(T=ft(A,s),T===null)throw ft(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw Je("WebGLRenderer: "+s.message),s}let Fe,$e,re,at,d,a,w,z,$,J,ae,k,X,fe,he,ne,j,be,Le,Ge,S,ee,W;function ue(){Fe=new kl(T),Fe.init(),S=new Nd(T,Fe),$e=new Nl(T,Fe,n,S),re=new Dd(T,Fe),$e.reversedDepthBuffer&&p&&re.buffers.depth.setReversed(!0),at=new Xl(T),d=new vd,a=new Id(T,Fe,re,d,$e,S,at),w=new Vl(O),z=new $o(T),ee=new Dl(T,z),$=new Wl(T,z,at,ee),J=new ql(T,$,z,ee,at),be=new Yl(T,$e,a),he=new yl(d),ae=new gd(O,w,Fe,$e,ee,he),k=new Hd(O,d),X=new Ed,fe=new bd(Fe),j=new Ul(O,w,re,J,P,x),ne=new Ud(O,J,$e),W=new Vd(T,at,$e,re),Le=new Il(T,Fe,at),Ge=new zl(T,Fe,at),at.programs=ae.programs,O.capabilities=$e,O.extensions=Fe,O.properties=d,O.renderLists=X,O.shadowMap=ne,O.state=re,O.info=at}ue(),D!==wt&&(E=new $l(D,t.width,t.height,o,r));const ie=new Bd(O,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const s=Fe.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Fe.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(s){s!==void 0&&(Ie=s,this.setSize(Ve,Ke,!1))},this.getSize=function(s){return s.set(Ve,Ke)},this.setSize=function(s,A,N=!0){if(ie.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=s,Ke=A,t.width=Math.floor(s*Ie),t.height=Math.floor(A*Ie),N===!0&&(t.style.width=s+"px",t.style.height=A+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,s,A)},this.getDrawingBufferSize=function(s){return s.set(Ve*Ie,Ke*Ie).floor()},this.setDrawingBufferSize=function(s,A,N){Ve=s,Ke=A,Ie=N,t.width=Math.floor(s*N),t.height=Math.floor(A*N),this.setViewport(0,0,s,A)},this.setEffects=function(s){if(D===wt){Je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(s){for(let A=0;A<s.length;A++)if(s[A].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(s||[])},this.getCurrentViewport=function(s){return s.copy(Q)},this.getViewport=function(s){return s.copy(te)},this.setViewport=function(s,A,N,L){s.isVector4?te.set(s.x,s.y,s.z,s.w):te.set(s,A,N,L),re.viewport(Q.copy(te).multiplyScalar(Ie).round())},this.getScissor=function(s){return s.copy(Me)},this.setScissor=function(s,A,N,L){s.isVector4?Me.set(s.x,s.y,s.z,s.w):Me.set(s,A,N,L),re.scissor(de.copy(Me).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(s){re.setScissorTest(Ce=s)},this.setOpaqueSort=function(s){Y=s},this.setTransparentSort=function(s){le=s},this.getClearColor=function(s){return s.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(s=!0,A=!0,N=!0){let L=0;if(s){let U=!1;if(F!==null){const ce=F.texture.format;U=l.has(ce)}if(U){const ce=F.texture.type,me=c.has(ce),se=j.getClearColor(),_e=j.getClearAlpha(),Se=se.r,we=se.g,De=se.b;me?(_[0]=Se,_[1]=we,_[2]=De,_[3]=_e,T.clearBufferuiv(T.COLOR,0,_)):(M[0]=Se,M[1]=we,M[2]=De,M[3]=_e,T.clearBufferiv(T.COLOR,0,M))}else L|=T.COLOR_BUFFER_BIT}A&&(L|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(L|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&T.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(s){s.setRenderer(this),V=s},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),j.dispose(),X.dispose(),fe.dispose(),d.dispose(),w.dispose(),J.dispose(),ee.dispose(),W.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",hi),ie.removeEventListener("sessionend",mi),Vt.stop()};function K(s){s.preventDefault(),Mi("WebGLRenderer: Context Lost."),b=!0}function ge(){Mi("WebGLRenderer: Context Restored."),b=!1;const s=at.autoReset,A=ne.enabled,N=ne.autoUpdate,L=ne.needsUpdate,U=ne.type;ue(),at.autoReset=s,ne.enabled=A,ne.autoUpdate=N,ne.needsUpdate=L,ne.type=U}function Pe(s){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function ot(s){const A=s.target;A.removeEventListener("dispose",ot),We(A)}function We(s){Dt(s),d.remove(s)}function Dt(s){const A=d.get(s).programs;A!==void 0&&(A.forEach(function(N){ae.releaseProgram(N)}),s.isShaderMaterial&&ae.releaseShaderCache(s))}this.renderBufferDirect=function(s,A,N,L,U,ce){A===null&&(A=lt);const me=U.isMesh&&U.matrixWorld.determinant()<0,se=dr(s,A,N,L,U);re.setMaterial(L,me);let _e=N.index,Se=1;if(L.wireframe===!0){if(_e=$.getWireframeAttribute(N),_e===void 0)return;Se=2}const we=N.drawRange,De=N.attributes.position;let Ee=we.start*Se,ze=(we.start+we.count)*Se;ce!==null&&(Ee=Math.max(Ee,ce.start*Se),ze=Math.min(ze,(ce.start+ce.count)*Se)),_e!==null?(Ee=Math.max(Ee,0),ze=Math.min(ze,_e.count)):De!=null&&(Ee=Math.max(Ee,0),ze=Math.min(ze,De.count));const st=ze-Ee;if(st<0||st===1/0)return;ee.setup(U,L,se,N,_e);let rt,Ye=Le;if(_e!==null&&(rt=z.get(_e),Ye=Ge,Ye.setIndex(rt)),U.isMesh)L.wireframe===!0?(re.setLineWidth(L.wireframeLinewidth*St()),Ye.setMode(T.LINES)):Ye.setMode(T.TRIANGLES);else if(U.isLine){let ht=L.linewidth;ht===void 0&&(ht=1),re.setLineWidth(ht*St()),U.isLineSegments?Ye.setMode(T.LINES):U.isLineLoop?Ye.setMode(T.LINE_LOOP):Ye.setMode(T.LINE_STRIP)}else U.isPoints?Ye.setMode(T.POINTS):U.isSprite&&Ye.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ht=U._multiDrawStarts,pe=U._multiDrawCounts,Et=U._multiDrawCount,Be=_e?z.get(_e).bytesPerElement:1,Mt=d.get(L).currentProgram.getUniforms();for(let bt=0;bt<Et;bt++)Mt.setValue(T,"_gl_DrawID",bt),Ye.render(ht[bt]/Be,pe[bt])}else if(U.isInstancedMesh)Ye.renderInstances(Ee,st,U.count);else if(N.isInstancedBufferGeometry){const ht=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,pe=Math.min(N.instanceCount,ht);Ye.renderInstances(Ee,st,pe)}else Ye.render(Ee,st)};function Rt(s,A,N){s.transparent===!0&&s.side===Tt&&s.forceSinglePass===!1?(s.side=vt,s.needsUpdate=!0,En(s,A,N),s.side=hn,s.needsUpdate=!0,En(s,A,N),s.side=Tt):En(s,A,N)}this.compile=function(s,A,N=null){N===null&&(N=s),v=fe.get(N),v.init(A),u.push(v),N.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),s!==N&&s.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();const L=new Set;return s.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ce=U.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const se=ce[me];Rt(se,N,U),L.add(se)}else Rt(ce,N,U),L.add(ce)}),v=u.pop(),L},this.compileAsync=function(s,A,N=null){const L=this.compile(s,A,N);return new Promise(U=>{function ce(){if(L.forEach(function(me){d.get(me).currentProgram.isReady()&&L.delete(me)}),L.size===0){U(s);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let In=null;function lr(s){In&&In(s)}function hi(){Vt.stop()}function mi(){Vt.start()}const Vt=new tr;Vt.setAnimationLoop(lr),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(s){In=s,ie.setAnimationLoop(s),s===null?Vt.stop():Vt.start()},ie.addEventListener("sessionstart",hi),ie.addEventListener("sessionend",mi),this.render=function(s,A){if(A!==void 0&&A.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;V!==null&&V.renderStart(s,A);const N=ie.enabled===!0&&ie.isPresenting===!0,L=E!==null&&(F===null||N)&&E.begin(O,F);if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(A),A=ie.getCamera()),s.isScene===!0&&s.onBeforeRender(O,s,A,F),v=fe.get(s,u.length),v.init(A),v.state.textureUnits=a.getTextureUnits(),u.push(v),ke.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),Te.setFromProjectionMatrix(ke,Ti,A.reversedDepth),ye=this.localClippingEnabled,et=he.init(this.clippingPlanes,ye),B=X.get(s,y.length),B.init(),y.push(B),ie.enabled===!0&&ie.isPresenting===!0){const me=O.xr.getDepthSensingMesh();me!==null&&Nn(me,A,-1/0,O.sortObjects)}Nn(s,A,0,O.sortObjects),B.finish(),O.sortObjects===!0&&B.sort(Y,le),tt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,tt&&j.addToRenderList(B,s),this.info.render.frame++,et===!0&&he.beginShadows();const U=v.state.shadowsArray;if(ne.render(U,s,A),et===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(L&&E.hasRenderPass())===!1){const me=B.opaque,se=B.transmissive;if(v.setupLights(),A.isArrayCamera){const _e=A.cameras;if(se.length>0)for(let Se=0,we=_e.length;Se<we;Se++){const De=_e[Se];gi(me,se,s,De)}tt&&j.render(s);for(let Se=0,we=_e.length;Se<we;Se++){const De=_e[Se];_i(B,s,De,De.viewport)}}else se.length>0&&gi(me,se,s,A),tt&&j.render(s),_i(B,s,A)}F!==null&&q===0&&(a.updateMultisampleRenderTarget(F),a.updateRenderTargetMipmap(F)),L&&E.end(O),s.isScene===!0&&s.onAfterRender(O,s,A),ee.resetDefaultState(),G=-1,H=null,u.pop(),u.length>0?(v=u[u.length-1],a.setTextureUnits(v.state.textureUnits),et===!0&&he.setGlobalState(O.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?B=y[y.length-1]:B=null,V!==null&&V.renderEnd()};function Nn(s,A,N,L){if(s.visible===!1)return;if(s.layers.test(A.layers)){if(s.isGroup)N=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(A);else if(s.isLightProbeGrid)v.pushLightProbeGrid(s);else if(s.isLight)v.pushLight(s),s.castShadow&&v.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||Te.intersectsSprite(s)){L&&Ne.setFromMatrixPosition(s.matrixWorld).applyMatrix4(ke);const me=J.update(s),se=s.material;se.visible&&B.push(s,me,se,N,Ne.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||Te.intersectsObject(s))){const me=J.update(s),se=s.material;if(L&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),Ne.copy(s.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(s.matrixWorld).applyMatrix4(ke)),Array.isArray(se)){const _e=me.groups;for(let Se=0,we=_e.length;Se<we;Se++){const De=_e[Se],Ee=se[De.materialIndex];Ee&&Ee.visible&&B.push(s,me,Ee,N,Ne.z,De)}}else se.visible&&B.push(s,me,se,N,Ne.z,null)}}const ce=s.children;for(let me=0,se=ce.length;me<se;me++)Nn(ce[me],A,N,L)}function _i(s,A,N,L){const{opaque:U,transmissive:ce,transparent:me}=s;v.setupLightsView(N),et===!0&&he.setGlobalState(O.clippingPlanes,N),L&&re.viewport(Q.copy(L)),U.length>0&&Sn(U,A,N),ce.length>0&&Sn(ce,A,N),me.length>0&&Sn(me,A,N),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function gi(s,A,N,L){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[L.id]===void 0){const Ee=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[L.id]=new Ut(1,1,{generateMipmaps:!0,type:Ee?Ht:wt,minFilter:Ot,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const ce=v.state.transmissionRenderTarget[L.id],me=L.viewport||Q;ce.setSize(me.z*O.transmissionResolutionScale,me.w*O.transmissionResolutionScale);const se=O.getRenderTarget(),_e=O.getActiveCubeFace(),Se=O.getActiveMipmapLevel();O.setRenderTarget(ce),O.getClearColor(Re),xe=O.getClearAlpha(),xe<1&&O.setClearColor(16777215,.5),O.clear(),tt&&j.render(N);const we=O.toneMapping;O.toneMapping=Lt;const De=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),v.setupLightsView(L),et===!0&&he.setGlobalState(O.clippingPlanes,L),Sn(s,N,L),a.updateMultisampleRenderTarget(ce),a.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ze=0,st=A.length;ze<st;ze++){const rt=A[ze],{object:Ye,geometry:ht,material:pe,group:Et}=rt;if(pe.side===Tt&&Ye.layers.test(L.layers)){const Be=pe.side;pe.side=vt,pe.needsUpdate=!0,vi(Ye,N,L,ht,pe,Et),pe.side=Be,pe.needsUpdate=!0,Ee=!0}}Ee===!0&&(a.updateMultisampleRenderTarget(ce),a.updateRenderTargetMipmap(ce))}O.setRenderTarget(se,_e,Se),O.setClearColor(Re,xe),De!==void 0&&(L.viewport=De),O.toneMapping=we}function Sn(s,A,N){const L=A.isScene===!0?A.overrideMaterial:null;for(let U=0,ce=s.length;U<ce;U++){const me=s[U],{object:se,geometry:_e,group:Se}=me;let we=me.material;we.allowOverride===!0&&L!==null&&(we=L),se.layers.test(N.layers)&&vi(se,A,N,_e,we,Se)}}function vi(s,A,N,L,U,ce){s.onBeforeRender(O,A,N,L,U,ce),s.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),U.onBeforeRender(O,A,N,L,s,ce),U.transparent===!0&&U.side===Tt&&U.forceSinglePass===!1?(U.side=vt,U.needsUpdate=!0,O.renderBufferDirect(N,A,L,U,s,ce),U.side=hn,U.needsUpdate=!0,O.renderBufferDirect(N,A,L,U,s,ce),U.side=Tt):O.renderBufferDirect(N,A,L,U,s,ce),s.onAfterRender(O,A,N,L,U,ce)}function En(s,A,N){A.isScene!==!0&&(A=lt);const L=d.get(s),U=v.state.lights,ce=v.state.shadowsArray,me=U.state.version,se=ae.getParameters(s,U.state,ce,A,N,v.state.lightProbeGridArray),_e=ae.getProgramCacheKey(se);let Se=L.programs;L.environment=s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial?A.environment:null,L.fog=A.fog;const we=s.isMeshStandardMaterial||s.isMeshLambertMaterial&&!s.envMap||s.isMeshPhongMaterial&&!s.envMap;L.envMap=w.get(s.envMap||L.environment,we),L.envMapRotation=L.environment!==null&&s.envMap===null?A.environmentRotation:s.envMapRotation,Se===void 0&&(s.addEventListener("dispose",ot),Se=new Map,L.programs=Se);let De=Se.get(_e);if(De!==void 0){if(L.currentProgram===De&&L.lightsStateVersion===me)return Ei(s,se),De}else se.uniforms=ae.getUniforms(s),V!==null&&s.isNodeMaterial&&V.build(s,N,se),s.onBeforeCompile(se,O),De=ae.acquireProgram(se,_e),Se.set(_e,De),L.uniforms=se.uniforms;const Ee=L.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Ee.clippingPlanes=he.uniform),Ei(s,se),L.needsLights=pr(s),L.lightsStateVersion=me,L.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),L.lightProbeGrid=v.state.lightProbeGridArray.length>0,L.currentProgram=De,L.uniformsList=null,De}function Si(s){if(s.uniformsList===null){const A=s.currentProgram.getUniforms();s.uniformsList=Pn.seqWithValue(A.seq,s.uniforms)}return s.uniformsList}function Ei(s,A){const N=d.get(s);N.outputColorSpace=A.outputColorSpace,N.batching=A.batching,N.batchingColor=A.batchingColor,N.instancing=A.instancing,N.instancingColor=A.instancingColor,N.instancingMorph=A.instancingMorph,N.skinning=A.skinning,N.morphTargets=A.morphTargets,N.morphNormals=A.morphNormals,N.morphColors=A.morphColors,N.morphTargetsCount=A.morphTargetsCount,N.numClippingPlanes=A.numClippingPlanes,N.numIntersection=A.numClipIntersection,N.vertexAlphas=A.vertexAlphas,N.vertexTangents=A.vertexTangents,N.toneMapping=A.toneMapping}function fr(s,A){if(s.length===0)return null;if(s.length===1)return s[0].texture!==null?s[0]:null;R.setFromMatrixPosition(A.matrixWorld);for(let N=0,L=s.length;N<L;N++){const U=s[N];if(U.texture!==null&&U.boundingBox.containsPoint(R))return U}return null}function dr(s,A,N,L,U){A.isScene!==!0&&(A=lt),a.resetTextureUnits();const ce=A.fog,me=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?A.environment:null,se=F===null?O.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:it.workingColorSpace,_e=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,Se=w.get(L.envMap||me,_e),we=L.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,De=!!N.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Ee=!!N.morphAttributes.position,ze=!!N.morphAttributes.normal,st=!!N.morphAttributes.color;let rt=Lt;L.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(rt=O.toneMapping);const Ye=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ht=Ye!==void 0?Ye.length:0,pe=d.get(L),Et=v.state.lights;if(et===!0&&(ye===!0||s!==H)){const Ze=s===H&&L.id===G;he.setState(L,s,Ze)}let Be=!1;L.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Et.state.version||pe.outputColorSpace!==se||U.isBatchedMesh&&pe.batching===!1||!U.isBatchedMesh&&pe.batching===!0||U.isBatchedMesh&&pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&pe.instancing===!1||!U.isInstancedMesh&&pe.instancing===!0||U.isSkinnedMesh&&pe.skinning===!1||!U.isSkinnedMesh&&pe.skinning===!0||U.isInstancedMesh&&pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&pe.instancingMorph===!1&&U.morphTexture!==null||pe.envMap!==Se||L.fog===!0&&pe.fog!==ce||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==he.numPlanes||pe.numIntersection!==he.numIntersection)||pe.vertexAlphas!==we||pe.vertexTangents!==De||pe.morphTargets!==Ee||pe.morphNormals!==ze||pe.morphColors!==st||pe.toneMapping!==rt||pe.morphTargetsCount!==ht||!!pe.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,pe.__version=L.version);let Mt=pe.currentProgram;Be===!0&&(Mt=En(L,A,U),V&&L.isNodeMaterial&&V.onUpdateProgram(L,Mt,pe));let bt=!1,Nt=!1,$t=!1;const qe=Mt.getUniforms(),ct=pe.uniforms;if(re.useProgram(Mt.program)&&(bt=!0,Nt=!0,$t=!0),L.id!==G&&(G=L.id,Nt=!0),pe.needsLights){const Ze=fr(v.state.lightProbeGridArray,U);pe.lightProbeGrid!==Ze&&(pe.lightProbeGrid=Ze,Nt=!0)}if(bt||H!==s){re.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),qe.setValue(T,"projectionMatrix",s.projectionMatrix),qe.setValue(T,"viewMatrix",s.matrixWorldInverse);const Ft=qe.map.cameraPosition;Ft!==void 0&&Ft.setValue(T,je.setFromMatrixPosition(s.matrixWorld)),$e.logarithmicDepthBuffer&&qe.setValue(T,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&qe.setValue(T,"isOrthographic",s.isOrthographicCamera===!0),H!==s&&(H=s,Nt=!0,$t=!0)}if(pe.needsLights&&(Et.state.directionalShadowMap.length>0&&qe.setValue(T,"directionalShadowMap",Et.state.directionalShadowMap,a),Et.state.spotShadowMap.length>0&&qe.setValue(T,"spotShadowMap",Et.state.spotShadowMap,a),Et.state.pointShadowMap.length>0&&qe.setValue(T,"pointShadowMap",Et.state.pointShadowMap,a)),U.isSkinnedMesh){qe.setOptional(T,U,"bindMatrix"),qe.setOptional(T,U,"bindMatrixInverse");const Ze=U.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),qe.setValue(T,"boneTexture",Ze.boneTexture,a))}U.isBatchedMesh&&(qe.setOptional(T,U,"batchingTexture"),qe.setValue(T,"batchingTexture",U._matricesTexture,a),qe.setOptional(T,U,"batchingIdTexture"),qe.setValue(T,"batchingIdTexture",U._indirectTexture,a),qe.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&qe.setValue(T,"batchingColorTexture",U._colorsTexture,a));const yt=N.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&be.update(U,N,Mt),(Nt||pe.receiveShadow!==U.receiveShadow)&&(pe.receiveShadow=U.receiveShadow,qe.setValue(T,"receiveShadow",U.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&A.environment!==null&&(ct.envMapIntensity.value=A.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=Wd()),Nt){if(qe.setValue(T,"toneMappingExposure",O.toneMappingExposure),pe.needsLights&&ur(ct,$t),ce&&L.fog===!0&&k.refreshFogUniforms(ct,ce),k.refreshMaterialUniforms(ct,L,Ie,Ke,v.state.transmissionRenderTarget[s.id]),pe.needsLights&&pe.lightProbeGrid){const Ze=pe.lightProbeGrid;ct.probesSH.value=Ze.texture,ct.probesMin.value.copy(Ze.boundingBox.min),ct.probesMax.value.copy(Ze.boundingBox.max),ct.probesResolution.value.copy(Ze.resolution)}Pn.upload(T,Si(pe),ct,a)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Pn.upload(T,Si(pe),ct,a),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&qe.setValue(T,"center",U.center),qe.setValue(T,"modelViewMatrix",U.modelViewMatrix),qe.setValue(T,"normalMatrix",U.normalMatrix),qe.setValue(T,"modelMatrix",U.matrixWorld),L.uniformsGroups!==void 0){const Ze=L.uniformsGroups;for(let Ft=0,Zt=Ze.length;Ft<Zt;Ft++){const xi=Ze[Ft];W.update(xi,Mt),W.bind(xi,Mt)}}return Mt}function ur(s,A){s.ambientLightColor.needsUpdate=A,s.lightProbe.needsUpdate=A,s.directionalLights.needsUpdate=A,s.directionalLightShadows.needsUpdate=A,s.pointLights.needsUpdate=A,s.pointLightShadows.needsUpdate=A,s.spotLights.needsUpdate=A,s.spotLightShadows.needsUpdate=A,s.rectAreaLights.needsUpdate=A,s.hemisphereLights.needsUpdate=A}function pr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(s,A,N){const L=d.get(s);L.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),d.get(s.texture).__webglTexture=A,d.get(s.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:N,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,A){const N=d.get(s);N.__webglFramebuffer=A,N.__useDefaultFramebuffer=A===void 0};const hr=T.createFramebuffer();this.setRenderTarget=function(s,A=0,N=0){F=s,Z=A,q=N;let L=null,U=!1,ce=!1;if(s){const se=d.get(s);if(se.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(T.FRAMEBUFFER,se.__webglFramebuffer),Q.copy(s.viewport),de.copy(s.scissor),ve=s.scissorTest,re.viewport(Q),re.scissor(de),re.setScissorTest(ve),G=-1;return}else if(se.__webglFramebuffer===void 0)a.setupRenderTarget(s);else if(se.__hasExternalTextures)a.rebindTextures(s,d.get(s.texture).__webglTexture,d.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const we=s.depthTexture;if(se.__boundDepthTexture!==we){if(we!==null&&d.has(we)&&(s.width!==we.image.width||s.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");a.setupDepthRenderbuffer(s)}}const _e=s.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ce=!0);const Se=d.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Se[A])?L=Se[A][N]:L=Se[A],U=!0):s.samples>0&&a.useMultisampledRTT(s)===!1?L=d.get(s).__webglMultisampledFramebuffer:Array.isArray(Se)?L=Se[N]:L=Se,Q.copy(s.viewport),de.copy(s.scissor),ve=s.scissorTest}else Q.copy(te).multiplyScalar(Ie).floor(),de.copy(Me).multiplyScalar(Ie).floor(),ve=Ce;if(N!==0&&(L=hr),re.bindFramebuffer(T.FRAMEBUFFER,L)&&re.drawBuffers(s,L),re.viewport(Q),re.scissor(de),re.setScissorTest(ve),U){const se=d.get(s.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+A,se.__webglTexture,N)}else if(ce){const se=A;for(let _e=0;_e<s.textures.length;_e++){const Se=d.get(s.textures[_e]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+_e,Se.__webglTexture,N,se)}}else if(s!==null&&N!==0){const se=d.get(s.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,se.__webglTexture,N)}G=-1},this.readRenderTargetPixels=function(s,A,N,L,U,ce,me,se=0){if(!(s&&s.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=d.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){re.bindFramebuffer(T.FRAMEBUFFER,_e);try{const Se=s.textures[se],we=Se.format,De=Se.type;if(s.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+se),!$e.textureFormatReadable(we)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(De)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=s.width-L&&N>=0&&N<=s.height-U&&T.readPixels(A,N,L,U,S.convert(we),S.convert(De),ce)}finally{const Se=F!==null?d.get(F).__webglFramebuffer:null;re.bindFramebuffer(T.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(s,A,N,L,U,ce,me,se=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=d.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(A>=0&&A<=s.width-L&&N>=0&&N<=s.height-U){re.bindFramebuffer(T.FRAMEBUFFER,_e);const Se=s.textures[se],we=Se.format,De=Se.type;if(s.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+se),!$e.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.bufferData(T.PIXEL_PACK_BUFFER,ce.byteLength,T.STREAM_READ),T.readPixels(A,N,L,U,S.convert(we),S.convert(De),0);const ze=F!==null?d.get(F).__webglFramebuffer:null;re.bindFramebuffer(T.FRAMEBUFFER,ze);const st=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Er(T,st,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ce),T.deleteBuffer(Ee),T.deleteSync(st),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,A=null,N=0){const L=Math.pow(2,-N),U=Math.floor(s.image.width*L),ce=Math.floor(s.image.height*L),me=A!==null?A.x:0,se=A!==null?A.y:0;a.setTexture2D(s,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,me,se,U,ce),re.unbindTexture()};const mr=T.createFramebuffer(),_r=T.createFramebuffer();this.copyTextureToTexture=function(s,A,N=null,L=null,U=0,ce=0){let me,se,_e,Se,we,De,Ee,ze,st;const rt=s.isCompressedTexture?s.mipmaps[ce]:s.image;if(N!==null)me=N.max.x-N.min.x,se=N.max.y-N.min.y,_e=N.isBox3?N.max.z-N.min.z:1,Se=N.min.x,we=N.min.y,De=N.isBox3?N.min.z:0;else{const ct=Math.pow(2,-U);me=Math.floor(rt.width*ct),se=Math.floor(rt.height*ct),s.isDataArrayTexture?_e=rt.depth:s.isData3DTexture?_e=Math.floor(rt.depth*ct):_e=1,Se=0,we=0,De=0}L!==null?(Ee=L.x,ze=L.y,st=L.z):(Ee=0,ze=0,st=0);const Ye=S.convert(A.format),ht=S.convert(A.type);let pe;A.isData3DTexture?(a.setTexture3D(A,0),pe=T.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(a.setTexture2DArray(A,0),pe=T.TEXTURE_2D_ARRAY):(a.setTexture2D(A,0),pe=T.TEXTURE_2D),re.activeTexture(T.TEXTURE0),re.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,A.flipY),re.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),re.pixelStorei(T.UNPACK_ALIGNMENT,A.unpackAlignment);const Et=re.getParameter(T.UNPACK_ROW_LENGTH),Be=re.getParameter(T.UNPACK_IMAGE_HEIGHT),Mt=re.getParameter(T.UNPACK_SKIP_PIXELS),bt=re.getParameter(T.UNPACK_SKIP_ROWS),Nt=re.getParameter(T.UNPACK_SKIP_IMAGES);re.pixelStorei(T.UNPACK_ROW_LENGTH,rt.width),re.pixelStorei(T.UNPACK_IMAGE_HEIGHT,rt.height),re.pixelStorei(T.UNPACK_SKIP_PIXELS,Se),re.pixelStorei(T.UNPACK_SKIP_ROWS,we),re.pixelStorei(T.UNPACK_SKIP_IMAGES,De);const $t=s.isDataArrayTexture||s.isData3DTexture,qe=A.isDataArrayTexture||A.isData3DTexture;if(s.isDepthTexture){const ct=d.get(s),yt=d.get(A),Ze=d.get(ct.__renderTarget),Ft=d.get(yt.__renderTarget);re.bindFramebuffer(T.READ_FRAMEBUFFER,Ze.__webglFramebuffer),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Zt=0;Zt<_e;Zt++)$t&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,d.get(s).__webglTexture,U,De+Zt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,d.get(A).__webglTexture,ce,st+Zt)),T.blitFramebuffer(Se,we,me,se,Ee,ze,me,se,T.DEPTH_BUFFER_BIT,T.NEAREST);re.bindFramebuffer(T.READ_FRAMEBUFFER,null),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||s.isRenderTargetTexture||d.has(s)){const ct=d.get(s),yt=d.get(A);re.bindFramebuffer(T.READ_FRAMEBUFFER,mr),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,_r);for(let Ze=0;Ze<_e;Ze++)$t?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ct.__webglTexture,U,De+Ze):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ct.__webglTexture,U),qe?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.__webglTexture,ce,st+Ze):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yt.__webglTexture,ce),U!==0?T.blitFramebuffer(Se,we,me,se,Ee,ze,me,se,T.COLOR_BUFFER_BIT,T.NEAREST):qe?T.copyTexSubImage3D(pe,ce,Ee,ze,st+Ze,Se,we,me,se):T.copyTexSubImage2D(pe,ce,Ee,ze,Se,we,me,se);re.bindFramebuffer(T.READ_FRAMEBUFFER,null),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else qe?s.isDataTexture||s.isData3DTexture?T.texSubImage3D(pe,ce,Ee,ze,st,me,se,_e,Ye,ht,rt.data):A.isCompressedArrayTexture?T.compressedTexSubImage3D(pe,ce,Ee,ze,st,me,se,_e,Ye,rt.data):T.texSubImage3D(pe,ce,Ee,ze,st,me,se,_e,Ye,ht,rt):s.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ce,Ee,ze,me,se,Ye,ht,rt.data):s.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ce,Ee,ze,rt.width,rt.height,Ye,rt.data):T.texSubImage2D(T.TEXTURE_2D,ce,Ee,ze,me,se,Ye,ht,rt);re.pixelStorei(T.UNPACK_ROW_LENGTH,Et),re.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Be),re.pixelStorei(T.UNPACK_SKIP_PIXELS,Mt),re.pixelStorei(T.UNPACK_SKIP_ROWS,bt),re.pixelStorei(T.UNPACK_SKIP_IMAGES,Nt),ce===0&&A.generateMipmaps&&T.generateMipmap(pe),re.unbindTexture()},this.initRenderTarget=function(s){d.get(s).__webglFramebuffer===void 0&&a.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?a.setTextureCube(s,0):s.isData3DTexture?a.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?a.setTexture2DArray(s,0):a.setTexture2D(s,0),re.unbindTexture()},this.resetState=function(){Z=0,q=0,F=null,re.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(n),t.unpackColorSpace=it._getUnpackColorSpace()}}const Ua={dark:{wire:2282478,wireBodyOpacity:.32,wireBladeOpacity:.42,accent:6809849,grid:2282478,gridOpacity:.22,nacelle:8554640,spinner:6580852,cowl:9080468,drum:10001572,liner:12881506,fanBlade:9607844,compressorBlade:10660016,turbineBlade:11703934,envIntensity:1.55,exposure:1.05},light:{wire:947344,wireBodyOpacity:.36,wireBladeOpacity:.55,accent:561586,grid:947344,gridOpacity:.2,nacelle:9080984,spinner:7238782,cowl:9475228,drum:10396330,liner:13276264,fanBlade:10134188,compressorBlade:11054774,turbineBlade:12099206,envIntensity:1.6,exposure:1.04}};function ei(e,n){const t=Math.sin(e*127.1+n*311.7)*43758.5453123;return t-Math.floor(t)}function Xd(e){const t=new Uint8Array(262144),i=new Uint8Array(256*256*4),o=new Float32Array(256*256);for(let m=0;m<256;m++){const P=(ei(m,11.7)-.5)*.5+(ei(m>>1,37.1)-.5)*.35;for(let D=0;D<256;D++){const l=D/256*Math.PI*2,c=P*(.85+.15*Math.sin(l*4+m*.31))+(ei(D,m)-.5)*.22;o[m*256+D]=c;const _=Math.round(Math.min(255,Math.max(0,210+c*36))),M=(m*256+D)*4;i[M]=_,i[M+1]=_,i[M+2]=_,i[M+3]=255}}for(let m=0;m<256;m++){const P=m-1+256&255,D=m+1&255;for(let l=0;l<256;l++){const c=l-1+256&255,_=l+1&255,M=(o[m*256+_]-o[m*256+c])*.35,R=(o[D*256+l]-o[P*256+l])*.9,B=1/Math.hypot(M,R,1),v=(m*256+l)*4;t[v]=Math.round((-M*B*.5+.5)*255),t[v+1]=Math.round((-R*B*.5+.5)*255),t[v+2]=Math.round((B*.5+.5)*255),t[v+3]=255}}const r=new ln(t,256,256,xt);r.wrapS=kt,r.wrapT=kt,r.magFilter=dt,r.minFilter=Ot,r.generateMipmaps=!0,r.anisotropy=e,r.needsUpdate=!0;const f=new ln(i,256,256,xt);f.wrapS=kt,f.wrapT=kt,f.magFilter=dt,f.minFilter=Ot,f.generateMipmaps=!0,f.anisotropy=e,f.needsUpdate=!0;const h=64,x=new Uint8Array(h*4);for(let m=0;m<h;m++){const P=Math.round(m/(h-1)*255);x[m*4]=P,x[m*4+1]=P,x[m*4+2]=P,x[m*4+3]=255}const g=new ln(x,h,1,xt);g.wrapS=vn,g.wrapT=vn,g.magFilter=dt,g.minFilter=dt,g.channel=1,g.needsUpdate=!0;const I=128,C=new Uint8Array(I*I*4);for(let m=0;m<I;m++){const P=m/I*Math.PI*2;for(let D=0;D<I;D++){const l=D/I*Math.PI*2,c=.5+.28*Math.sin(l*2+P*3)+.14*Math.cos(l*5-P*2)+.08*Math.sin(l*9+P*7),_=Math.round(Math.min(255,Math.max(0,c*255))),M=(m*I+D)*4;C[M]=_,C[M+1]=_,C[M+2]=_,C[M+3]=255}}const p=new ln(C,I,I,xt);return p.wrapS=kt,p.wrapT=kt,p.magFilter=dt,p.minFilter=dt,p.needsUpdate=!0,{normal:r,roughness:f,ao:g,iridescence:p}}function Yd(e){const n=new er;n.background=new Xe(329482);const t=new Ko(16,128,64),i=t.getAttribute("position"),o=new Float32Array(i.count*3),r=(g,I,C,p,m,P=1.5)=>{const D=new Ae(...g).normalize(),l=Math.abs(D.y)>.9?new Ae(0,0,1):new Ae(0,1,0),c=new Ae(1,0,0).cross(D);c.lengthSq()<1e-4&&c.copy(l).cross(D),c.normalize();const _=new Ae().crossVectors(D,c).normalize(),M=new Xe(p).multiplyScalar(m);return{dir:D,u:_,v:c,su:I,sv:C,power:P,r:M.r,g:M.g,b:M.b}},f=[r([-.1,.72,.68],.85,.24,16776439,4.2,1.1),r([-.2,.12,.96],.85,.32,14412542,1.35,1),r([-.86,.2,.46],.38,.38,16777215,4,1.1),r([-.72,-.38,.56],.38,.32,13358561,1.9,1),r([.15,.7,-.7],.82,.18,12248829,3.6,1.2),r([.05,-.82,.56],.8,.24,14870768,1.75,1.1),r([.74,.22,.62],.42,.34,15857145,2.2,1)],h=new Ae;for(let g=0;g<i.count;g++){h.set(i.getX(g),i.getY(g),i.getZ(g)).normalize();const I=h.y,C=Math.pow(Math.max(0,I),1.5),p=Math.pow(Math.max(0,-I),1.5);let m=.06+.12*C+.07*p,P=.068+.13*C+.075*p,D=.082+.15*C+.085*p;for(const l of f){const c=h.dot(l.dir);if(c<=0)continue;const _=Math.abs(h.dot(l.u)/l.su),M=Math.abs(h.dot(l.v)/l.sv),R=_*_+M*M,B=Math.exp(-.5*Math.pow(R,l.power))*c*c;m+=l.r*B,P+=l.g*B,D+=l.b*B}o[g*3]=m,o[g*3+1]=P,o[g*3+2]=D}t.setAttribute("color",new qt(o,3)),n.add(new mt(t,new fi({vertexColors:!0,side:vt})));const x=e.fromScene(n,.01).texture;return n.traverse(g=>{g instanceof mt&&(g.geometry.dispose(),g.material.dispose())}),x}const zt=8,Da=-1.35,qd=1.95,Ia=14,Kd={wire:-3.35,solid:3.45},$d=1.5,Zd=2.4,Rn=new Ae(.12,-.12,0),Qd=36*(Math.PI/180),Jd=13*(Math.PI/180),jd=6*(Math.PI/180),eu=`
varying vec3 vLocal;
void main() {
  vLocal = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,tu=`
uniform vec2 uIv[${zt}];
uniform int uCount;
uniform vec3 uColor;
uniform float uOpacity;
varying vec3 vLocal;
void main() {
  float r = length(vLocal.yz);
  float edge = -1.0;
  for (int i = 0; i < ${zt}; i++) {
    if (i >= uCount) break;
    vec2 iv = uIv[i];
    if (r >= iv.x && r <= iv.y) edge = min(r - iv.x, iv.y - r);
  }
  if (edge < 0.0) discard;
  float aa = fwidth(r);
  float h = (vLocal.y + vLocal.z) * 0.70710678;
  float period = 0.045;
  float d = abs(fract(h / period) - 0.5) * period;
  float hatch = 1.0 - smoothstep(0.0, fwidth(h) * 1.25, d - 0.0035);
  float border = 1.0 - smoothstep(aa * 0.5, aa * 2.0, edge);
  float a = 0.12 + 0.5 * hatch + 0.88 * border;
  gl_FragColor = vec4(uColor, uOpacity * clamp(a, 0.0, 1.0));
}`,nu=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,iu=`
uniform vec3 uColor;
uniform float uOpacity;
varying vec3 vWorld;
float grid(vec2 p, float size) {
  vec2 q = p / size;
  vec2 g = abs(fract(q - 0.5) - 0.5) / fwidth(q);
  return 1.0 - min(min(g.x, g.y), 1.0);
}
void main() {
  vec2 p = vWorld.xz;
  float fine = grid(p, 0.25);
  float major = grid(p, 1.25);
  vec2 e = (p - vec2(0.2, 0.0)) / vec2(5.2, 3.0);
  float fade = 1.0 - smoothstep(0.35, 1.0, length(e));
  float a = (fine * 0.35 + major * 0.9) * fade * uOpacity;
  if (a < 0.002) discard;
  gl_FragColor = vec4(uColor, a);
}`;function ti(e,n,t){const i=Math.min(Math.max((t-e)/(n-e),0),1);return i*i*(3-2*i)}class su{renderer;scene=new er;camera=new un(24,1,.5,60);pmrem;pbrMaps;fog=new No(0,10,24);solidPlane=new ni(new Ae(-1,0,0),0);wirePlane=new ni(new Ae(1,0,0),0);solidKeys=["nacelle","spinner","cowl","drum","liner","fanBlade","compressorBlade","turbineBlade"];mats;n1=new Mn;n2=new Mn;section=new Mn;contours=[];intervals=new Float32Array(zt*2);capIv=Array.from({length:zt},()=>new nt);capUniforms={uIv:{value:this.capIv},uCount:{value:0},uColor:{value:new Xe},uOpacity:{value:1}};gridUniforms={uColor:{value:new Xe},uOpacity:{value:1}};callouts;anchors=Wn.map(n=>new Ae(...n.anchor));tmp=new Ae;tmp2=new Ae;mode="section";paused=!1;reducedMotion;dark;s=-.35;time=Ia*.22;last=0;raf=0;visible=!0;disposed=!1;firstFrame=!0;onFirstFrame;width=1;height=1;distance=16;dragAz=0;dragEl=0;dragging=!1;dragPointer=-1;dragX=0;dragY=0;releasedAt=-1/0;constructor(n){this.callouts=n.callouts,this.dark=n.dark,this.reducedMotion=n.reducedMotion,this.onFirstFrame=n.onFirstFrame,this.renderer=new zd({canvas:n.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.localClippingEnabled=!0,this.renderer.toneMapping=pi,this.renderer.setClearColor(0,0),this.pmrem=new oi(this.renderer),this.scene.environment=Yd(this.pmrem),this.scene.fog=this.fog;const t=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8);this.pbrMaps=Xd(t);const i=new zn(16775920,.75);i.position.set(-5.2,6.2,5);const o=new zn(12248829,.85);o.position.set(4.2,5.2,-5.5);const r=new zn(14742270,.35);r.position.set(-6.5,-1.8,3.8);const f=new yo(16739098,2.2,2.4,1.5);f.position.set(.75,0,0),this.scene.add(i,o,r,f);const h=Ua[this.dark?"dark":"light"],x=I=>new qo({vertexColors:!0,normalMap:this.pbrMaps.normal,roughnessMap:this.pbrMaps.roughness,aoMap:this.pbrMaps.ao,aoMapIntensity:.92,side:Tt,clippingPlanes:[this.solidPlane],fog:!1,envMapIntensity:h.envIntensity,...I}),g=I=>new Xn({transparent:!0,opacity:I,depthWrite:!1,clippingPlanes:[this.wirePlane]});this.mats={nacelle:x({color:h.nacelle,metalness:.93,roughness:.19,anisotropy:.22,anisotropyRotation:Math.PI/2,normalScale:new nt(.025,.01)}),spinner:x({color:h.spinner,metalness:.94,roughness:.17,anisotropy:.32,anisotropyRotation:Math.PI/2,normalScale:new nt(.035,.012)}),cowl:x({color:h.cowl,metalness:.95,roughness:.18,anisotropy:.28,anisotropyRotation:Math.PI/2,iridescence:.18,iridescenceIOR:1.6,iridescenceThicknessRange:[220,320],normalScale:new nt(.03,.012)}),drum:x({color:h.drum,metalness:.96,roughness:.15,anisotropy:.34,anisotropyRotation:Math.PI/2,iridescence:.34,iridescenceIOR:1.72,iridescenceThicknessRange:[240,420],normalScale:new nt(.035,.012)}),liner:x({color:h.liner,metalness:.94,roughness:.19,anisotropy:.28,anisotropyRotation:Math.PI/2,iridescence:.85,iridescenceIOR:1.85,iridescenceThicknessRange:[200,500],iridescenceThicknessMap:this.pbrMaps.iridescence,emissive:16731402,emissiveIntensity:.15,normalScale:new nt(.045,.02)}),fanBlade:x({color:h.fanBlade,metalness:.97,roughness:.13,anisotropy:.35,normalScale:new nt(.022,.01)}),compressorBlade:x({color:h.compressorBlade,metalness:.96,roughness:.15,anisotropy:.3,normalScale:new nt(.022,.01)}),turbineBlade:x({color:h.turbineBlade,metalness:.95,roughness:.17,anisotropy:.28,iridescence:.68,iridescenceIOR:1.75,iridescenceThicknessRange:[240,460],emissive:16729344,emissiveIntensity:.06,normalScale:new nt(.025,.012)}),wireBody:g(h.wireBodyOpacity),wireBlade:g(h.wireBladeOpacity),contour:new Xn({transparent:!0,opacity:.95,fog:!1}),frame:new Xn({transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),frameFill:new fi({transparent:!0,opacity:.16,depthWrite:!1,side:Tt,fog:!1}),cap:new At({vertexShader:eu,fragmentShader:tu,transparent:!0,depthWrite:!1,side:Tt,uniforms:this.capUniforms}),grid:new At({vertexShader:nu,fragmentShader:iu,transparent:!0,depthWrite:!1,uniforms:this.gridUniforms})},this.build(),this.applyTheme(),n.canvas.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),document.addEventListener("visibilitychange",this.onVisibility)}build(){const n=new Mn;this.scene.add(n,this.n1,this.n2,this.section);for(const h of Fo){const x=h.spool==="n1"?this.n1:h.spool==="n2"?this.n2:n;x.add(new mt(Oo(h.profile,h.segments,h.material),this.mats[h.material]));const g=new Yt;g.setAttribute("position",new qt(Bo(h.profile,h.meridians),3)),x.add(new Yn(g,this.mats.wireBody))}for(const h of Go){const x=h.spool==="n1"?this.n1:h.spool==="n2"?this.n2:n,g=Ho(h),I=new Vo(ko(h),this.mats[h.material],g.length);g.forEach((p,m)=>I.setMatrixAt(m,p)),I.instanceMatrix.needsUpdate=!0,I.computeBoundingSphere(),x.add(I);const C=new Yt;C.setAttribute("position",new qt(Wo(h),3)),x.add(new Yn(C,this.mats.wireBlade))}const t=new pn(3.4,3.4);t.rotateY(Math.PI/2),this.section.add(new mt(t,this.mats.cap));const i=[];for(let h=0;h<160;h++){const x=h/160*Math.PI*2;i.push(new Ae(0,Math.cos(x),Math.sin(x)))}const o=new Yt().setFromPoints(i);for(let h=0;h<zt*2;h++){const x=new zo(o,this.mats.contour);x.visible=!1,this.contours.push(x),this.section.add(x)}const r=new pn(3.64,3.64);r.rotateY(Math.PI/2),this.section.add(new mt(r,this.mats.frameFill));const f=new mt(new pn(16,10),this.mats.grid);f.rotation.x=-Math.PI/2,f.position.set(.2,-1.92,0),f.renderOrder=-1,this.scene.add(f)}setMode(n){this.mode=n,this.wake()}setPaused(n){this.paused=n,this.wake()}setDark(n){this.dark=n,this.applyTheme(),this.wake()}setReducedMotion(n){this.reducedMotion=n,this.wake()}setVisible(n){this.visible=n,n&&this.wake()}resize(n,t){if(n<=0||t<=0)return;this.width=n,this.height=t,this.renderer.setSize(n,t,!1),this.camera.aspect=n/t;const i=Math.tan(qn.degToRad(this.camera.fov/2)),o=i*this.camera.aspect;this.distance=Math.max(3.75/o,2.45/i),this.camera.near=this.distance-8,this.camera.far=this.distance+12,this.camera.updateProjectionMatrix(),this.fog.near=this.distance-1.5,this.fog.far=this.distance+6,this.wake()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),document.removeEventListener("visibilitychange",this.onVisibility);const t=new Set;this.scene.traverse(i=>{(i instanceof mt||i instanceof Yn||i instanceof Xo)&&t.add(i.geometry)}),t.forEach(i=>i.dispose()),Object.values(this.mats).forEach(i=>i.dispose()),this.pbrMaps.normal.dispose(),this.pbrMaps.roughness.dispose(),this.pbrMaps.ao.dispose(),this.pbrMaps.iridescence.dispose(),this.scene.environment?.dispose(),this.pmrem.dispose(),this.renderer.dispose()}applyTheme(){const n=Ua[this.dark?"dark":"light"],t=this.mats;for(const o of this.solidKeys)t[o].color.setHex(n[o]),t[o].envMapIntensity=n.envIntensity;t.wireBody.color.setHex(n.wire),t.wireBody.opacity=n.wireBodyOpacity,t.wireBlade.color.setHex(n.wire),t.wireBlade.opacity=n.wireBladeOpacity,t.contour.color.setHex(n.accent),t.frame.color.setHex(n.wire),t.frameFill.color.setHex(this.dark?132363:1976635),this.capUniforms.uColor.value.setHex(n.accent),this.gridUniforms.uColor.value.setHex(n.grid),this.gridUniforms.uOpacity.value=n.gridOpacity,this.renderer.toneMappingExposure=n.exposure;const i=getComputedStyle(document.documentElement).getPropertyValue("--vp-c-bg").trim();this.fog.color.set(i||(this.dark?"#1b1b1f":"#ffffff"))}onPointerDown=n=>{n.button===0&&(this.dragging=!0,this.dragPointer=n.pointerId,this.dragX=n.clientX,this.dragY=n.clientY,this.wake())};onPointerMove=n=>{if(!this.dragging||n.pointerId!==this.dragPointer)return;const t=n.clientX-this.dragX,i=n.clientY-this.dragY;this.dragX=n.clientX,this.dragY=n.clientY,this.dragAz=qn.clamp(this.dragAz-t*.006,-1.1,1.6),this.dragEl=qn.clamp(this.dragEl+i*.004,-.2,.5),this.wake()};onPointerUp=n=>{!this.dragging||n.pointerId!==this.dragPointer||(this.dragging=!1,this.releasedAt=performance.now(),this.wake())};onVisibility=()=>{document.hidden||this.wake()};wake(){this.disposed||this.raf||!this.visible||document.hidden||(this.last=performance.now(),this.raf=requestAnimationFrame(this.frame))}frame=n=>{if(this.raf=0,this.disposed)return;const t=Math.min((n-this.last)/1e3,.05);this.last=n;const i=!this.paused&&!this.reducedMotion;i&&(this.time+=t,this.n1.rotation.x+=$d*t,this.n2.rotation.x+=Zd*t);let o;if(this.mode==="section"){const p=this.reducedMotion?.47:.5-.5*Math.cos(this.time/Ia*Math.PI*2);o=Da+(qd-Da)*p}else o=Kd[this.mode];const r=this.reducedMotion?1:1-Math.exp(-t*3.2);this.s+=(o-this.s)*r;const f=Math.abs(o-this.s)<1e-4;if(f&&(this.s=o),!this.dragging&&n-this.releasedAt>2600){const p=this.reducedMotion?1:1-Math.exp(-t*2.2);this.dragAz-=this.dragAz*p,this.dragEl-=this.dragEl*p,Math.abs(this.dragAz)<1e-4&&(this.dragAz=0),Math.abs(this.dragEl)<1e-4&&(this.dragEl=0)}const h=this.reducedMotion?0:jd*Math.sin(this.time/18*Math.PI*2),x=Qd+h+this.dragAz,g=Jd+this.dragEl;this.camera.position.set(Rn.x-Math.sin(x)*Math.cos(g)*this.distance,Rn.y+Math.sin(g)*this.distance,Rn.z+Math.cos(x)*Math.cos(g)*this.distance),this.camera.lookAt(Rn),this.updateSection(),this.renderer.render(this.scene,this.camera),this.updateCallouts(),this.firstFrame&&(this.firstFrame=!1,this.onFirstFrame?.());const I=!this.dragging&&this.dragAz===0&&this.dragEl===0;(i||!f||!I)&&this.wake()};updateSection(){const n=this.s;this.solidPlane.constant=n,this.wirePlane.constant=-n,this.section.position.x=n;const t=ti(-3.2,-2.75,n)*(1-ti(2.9,3.35,n));this.section.visible=t>.001,this.mats.frame.opacity=.55*t,this.mats.frameFill.opacity=.16*t,this.mats.contour.opacity=.95*t,this.capUniforms.uOpacity.value=t;const i=Yo(n,this.intervals,zt);for(let o=0;o<zt;o++)this.capIv[o].set(this.intervals[o*2],this.intervals[o*2+1]);this.capUniforms.uCount.value=i;for(let o=0;o<this.contours.length;o++){const r=this.contours[o],f=o>>1,h=f<i?this.intervals[o]:0;r.visible=f<i&&h>.02,r.scale.setScalar(h)}}updateCallouts(){const n=this.width,t=this.height;for(let i=0;i<Wn.length;i++){const o=Wn[i],r=this.callouts[i];if(!r)continue;const f=o.key==="fan"?1:ti(.02,.22,o.x-this.s),h=this.tmp.copy(this.anchors[i]).project(this.camera),x=(h.x*.5+.5)*n,g=(-h.y*.5+.5)*t,C=(-this.tmp2.set(o.anchor[0],o.side<0?1.95:-1.95,0).project(this.camera).y*.5+.5)*t+(o.side<0?-6:6);r.line.setAttribute("x1",x.toFixed(1)),r.line.setAttribute("y1",g.toFixed(1)),r.line.setAttribute("x2",x.toFixed(1)),r.line.setAttribute("y2",C.toFixed(1)),r.dot.setAttribute("cx",x.toFixed(1)),r.dot.setAttribute("cy",g.toFixed(1));const p=f.toFixed(3);r.line.style.opacity=p,r.dot.style.opacity=p,r.label.style.opacity=p,r.label.style.transform=`translate(${x.toFixed(1)}px, ${C.toFixed(1)}px) translate(-50%, ${o.side<0?"-100%":"0"})`}}}export{su as TurbineScene};
