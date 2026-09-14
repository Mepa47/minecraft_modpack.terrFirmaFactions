BlockEvents.drops(event => {
    const player = event.player;
    if (!player) return;

    if (event.block.hasTag('tfc:logs')) {
        let skilllevel = player.getSkillData().getSkillLevel('tree_fortune');

        if (skilllevel > 0) {
            event.drops.forEach(dropStack => {
                if (dropStack.item.hasTag('tfc:logs')) {
                    dropStack.count += skilllevel;
                }
            });
        }
    }
});
