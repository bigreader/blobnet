let stats = {
	combat: 0,
	trade: 0,
	heal: 0
}

$(function() {

	$('.tally').each(function() {
		const el = $(this)
		const stat = el.attr('data-stat')
		el.attr('style', `background: url('assets/${stat}.svg') center / contain no-repeat`)
		el.children('button').attr('data-stat', stat)
	})

	$('.tally button').click(function() {
		const el = $(this)
		const stat = el.attr('data-stat')

		stats[stat] += (el.attr('data-action') === 'plus' ? 1 : -1)
		if (stats[stat] < 0) {
			stats[stat] = 0
		}

		el.parent().children('.tallyVal').text(stats[stat])
		
		console.log(`tally: ${el.attr('data-action')} ${el.attr('data-stat')}`)
	})

	$('.toggleRow[data-count]').each(function() {
		const row = $(this)
		const toggleStyle = `background: url('assets/${row.attr('data-icon')}.svg') center / contain no-repeat`
		const count = row.attr('data-count')
		for (let i=0; i<count; i++) {
			row.append(
				$('<button>')
				.attr('style', toggleStyle)
			)
		}
	})

	$('.toggleRow button').each(function() {
		const el = $(this)

		el.attr('data-toggle', 'off')

		if (el.attr('data-icon')) {
			el.attr('style', `background: url('assets/${el.attr('data-icon')}.svg') center / contain no-repeat`)
		}

		el.click(function() {
			const ell = $(this)
			ell.attr('data-toggle', ell.attr('data-toggle') === 'on' ? 'off' : 'on')
		})
	})

	$('.reset').click(function() {
		stats = {
			combat: 0,
			trade: 0,
			heal: 0
		}
		$('.tallyVal').text('0')
		$('.toggleRow button').attr('data-toggle', 'off')
	})
})
