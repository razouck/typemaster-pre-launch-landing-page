const selector = ".slide-in";
const elements = document.querySelectorAll( selector );
const observer = new IntersectionObserver( function( entries )
{
	for ( let i = 0; i < entries.length; i++ )
	{
		const entry   = entries[ i ];
		const element = entry.target;

		element.style.setProperty( "--i", `${ i }` );

		if ( entry.isIntersecting === true )
		{
			element.style.setProperty( "--play-state", "running" );
		}
	}
}, { threshold : [ 1 ] } );

for ( let i = 0; i < elements.length; i++ )
{
	const element = elements[ i ];

	element.style.setProperty( "--play-state", "paused" );

	observer.observe( element );
}
