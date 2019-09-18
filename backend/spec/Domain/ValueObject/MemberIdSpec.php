<?php

namespace spec\App\Domain\ValueObject;

use App\Domain\ValueObject\MemberId;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class MemberIdSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(MemberId::class);
    }
}
