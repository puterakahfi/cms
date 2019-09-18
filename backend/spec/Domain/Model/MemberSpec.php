<?php

namespace spec\App\Domain\Model;

use App\Domain\Model\Member;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class MemberSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(Member::class);
    }
}
